rm -rf rdist
node rbuild.js
node node_modules/requirejs/bin/r.js -o cssIn=app/styles/main.css out=rdist/styles/main.css