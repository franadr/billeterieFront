"use strict";
var edit_component_1 = require("../component/EditComponent/edit.component");
var addOffer_component_1 = require("../component/AddOfferComponent/addOffer.component");
exports.editRoutes = [
    {
        path: 'edit',
        component: edit_component_1.EditComponent,
        children: [
            { path: 'add', component: addOffer_component_1.AddOfferComponent }
        ]
    }
];
//# sourceMappingURL=edit.routes.js.map