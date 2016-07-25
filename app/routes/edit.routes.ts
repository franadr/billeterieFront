
import {EditComponent} from "../component/EditComponent/edit.component";
import {AddOfferComponent} from "../component/AddOfferComponent/addOffer.component";
import {RouterConfig} from "@angular/router";
import {LogComponent} from "../component/LogComponent/log.component";
import {EditOfferComponent} from "../component/EditOfferComponent/editOffer.component";
import {VenteComponent} from "../component/VenteComponent/vente.component";
import {LoggingComponent} from "../component/LoggingComponent/logging.component";
export const editRoutes: RouterConfig = [
    {
        path: 'administration',
        component: EditComponent,
        children: [
            { path: 'add',  component: AddOfferComponent },
            { path : 'log', component : LogComponent},
            { path : 'edit', component : EditOfferComponent},
            { path : 'vente', component : VenteComponent},
            { path : 'historique', component : LoggingComponent}

        ]
    }
];