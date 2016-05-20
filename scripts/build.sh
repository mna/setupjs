#!/usr/bin/env bash
set -euo pipefail

# $1: source file, with relative directory
# $2: exported variable name that will hold the new filename
# $3: format string to generate the new filename
function hashFile() {
    local src=$1
    local dir=$(dirname ${src})
    local hash=$(shasum -a 1 ${src} | cut -c 1-16)

    eval "$2=$(echo $3)"
    mv ${src} ${dir}/${!2}
}

if [[ -z ${NODE_ENV-} ]]; then
    NODE_ENV=development
fi

# generate development build of CSS
node-sass src/styles/main.sass build/css/build.css

# generate js bundle for babel-polyfill, redux and deku
browserify -r babel-polyfill > build/js/babel_polyfill.js
browserify -r redux -r redux-thunk > build/js/redux.js
browserify -r deku -r dscript > build/js/deku.js
# generate js bundle for app code
browserify -x babel-polyfill -x redux -x redux-thunk -x deku -x dscript -d -t babelify src/js/main.js > build/js/build.js

# set the default filenames for the pages to link to
export BUILD_CSS_FILENAME=build.css
export BUILD_POLYFILL_FILENAME=babel_polyfill.js
export BUILD_REDUX_FILENAME=redux.js
export BUILD_DEKU_FILENAME=deku.js
export BUILD_APP_FILENAME=build.js

if [[ ${NODE_ENV} == "production" ]]; then
    # generate production build of CSS
    node-sass --output-style compressed src/styles/main.sass build/css/build.min.css

    # generate production build of js
    uglifyjs build/js/babel_polyfill.js -c warnings=false -m > build/js/babel_polyfill.min.js
    uglifyjs build/js/redux.js -c warnings=false -m > build/js/redux.min.js
    uglifyjs build/js/deku.js -c warnings=false -m > build/js/deku.min.js
    uglifyjs build/js/build.js -c warnings=false -m > build/js/build.min.js

    # override the filenames which cache-busting-enabled names, based on 
    # the hash of the contents.
    hashFile 'build/css/build.min.css' BUILD_CSS_FILENAME 'build.${hash}.min.css'
    hashFile 'build/js/babel_polyfill.min.js' BUILD_POLYFILL_FILENAME 'babel_polyfill.${hash}.min.js'
    hashFile 'build/js/redux.min.js' BUILD_REDUX_FILENAME 'redux.${hash}.min.js'
    hashFile 'build/js/deku.min.js' BUILD_DEKU_FILENAME 'deku.${hash}.min.js'
    hashFile 'build/js/build.min.js' BUILD_APP_FILENAME 'build.${hash}.min.js'

    # generate minified html file
    jade -o build src/templates/*.jade
else
    # generate pretty html file
    jade -P -o build src/templates/*.jade
fi

