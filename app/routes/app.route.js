"use strict";
var router_1 = require("@angular/router");
var listOffers_component_1 = require("../component/ListOffersComponent/listOffers.component");
var edit_component_1 = require("../component/EditComponent/edit.component");
var edit_routes_1 = require("./edit.routes");
var routes = edit_routes_1.editRoutes.concat([
    {
        path: '',
        component: listOffers_component_1.ListOffersComponent
    },
    {
        path: 'offres',
        component: listOffers_component_1.ListOffersComponent
    },
    {
        path: 'administration',
        component: edit_component_1.EditComponent,
    },
]);
exports.AppRouteProvider = [router_1.provideRouter(routes)];
//# sourceMappingURL=app.route.js.map