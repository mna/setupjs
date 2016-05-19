#!/usr/bin/env bash
set -euo pipefail

if [[ -z ${NODE_ENV-} ]]; then
    NODE_ENV=development
fi

if [[ ${NODE_ENV} == "development" ]]; then
    # generate html file
    jade -P -o build src/templates/*.jade
fi

# generate development build of CSS
node-sass src/styles/main.sass build/css/build.css

# generate js bundle for babel-polyfill, redux and deku
browserify -r babel-polyfill > build/js/babel_polyfill.js
browserify -r redux -r redux-thunk > build/js/redux.js
browserify -r deku > build/js/deku.js
# generate js bundle for app code
browserify -x babel-polyfill -x redux -x redux-thunk -x deku -d -t babelify src/js/main.js > build/js/build.js

if [[ ${NODE_ENV} == "production" ]]; then
    # generate minified html file
    jade -o build src/templates/*.jade

    # generate production build of CSS
    node-sass --output-style compressed src/styles/main.sass build/css/build.min.css

    # generate production build of js
    uglifyjs build/js/babel_polyfill.js -c warnings=false -m > build/js/babel_polyfill.min.js
    uglifyjs build/js/redux.js -c warnings=false -m > build/js/redux.min.js
    uglifyjs build/js/deku.js -c warnings=false -m > build/js/deku.min.js
    uglifyjs build/js/bundle.js -c warnings=false -m > build/js/build.min.js
fi

