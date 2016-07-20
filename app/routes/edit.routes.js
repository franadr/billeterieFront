"use strict";
var edit_component_1 = require("../component/EditComponent/edit.component");
var addOffer_component_1 = require("../component/AddOfferComponent/addOffer.component");
var log_component_1 = require("../component/LogComponent/log.component");
var editOffer_component_1 = require("../component/EditOfferComponent/editOffer.component");
exports.editRoutes = [
    {
        path: 'edit',
        component: edit_component_1.EditComponent,
        children: [
            { path: 'add', component: addOffer_component_1.AddOfferComponent },
            { path: 'log', component: log_component_1.LogComponent },
            { path: 'edit', component: editOffer_component_1.EditOfferComponent }
        ]
    }
];
//# sourceMappingURL=edit.routes.js.map