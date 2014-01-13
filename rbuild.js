var requirejs = require('requirejs');

var config = {
    // Assume your scripts are in a subdirectory under this path.
    appDir: 'app',

    // By default, all modules are located relative to this path.
    baseUrl: 'scripts',

    // Location of the runtime config be read for the build.
    mainConfigFile: 'app/scripts/bootstrap.js',

    //The directory path to save the output.
    dir: 'rdist',

    // If you do not want uglifyjs optimization.
    optimize: 'none',

    optimizeCss: 'none',

    // Inlines any text! dependencies, to avoid separate requests.
    inlineText: true,

    // Modules to stub out in the optimized file.
    // stubModules: ['underscore', 'text', 'tpl'],

    // Files combined into a build layer will be removed from the output folder.
    removeCombined: true,

    // This option will turn off the auto-preservation.
    preserveLicenseComments: false,

    //List the modules that will be optimized.
    modules: [
        {
            name: "bootstrap" // main config file
        }
    ]
};

requirejs.optimize(config, function (buildResponse) {
    //buildResponse is just a text output of the modules
    //included. Load the built file for the contents.
    //Use config.out to get the optimized file contents.
    var contents = fs.readFileSync(config.out, 'utf8');

}, function(err) {
    //optimization err callback
    console.log(err);
});