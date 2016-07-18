"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_component_1 = require("./component/AppComponent/app.component");
var http_1 = require("@angular/http");
var app_route_1 = require('./routes/app.route');
require("angular2-materialize");
//noinspection TypeScriptValidateTypes
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    app_route_1.AppRouteProvider,
]);
//# sourceMappingURL=main.js.map