// This file isnt't transpiled, so must use CommonJS and ES5

//Register Babel to transpile before our tests run.
require('babel-register') ();

//Disable webpack features that Mocha doesn't udnerstand.
require.extensions['.css']= function(){};
