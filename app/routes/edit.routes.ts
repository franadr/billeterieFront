
import {EditComponent} from "../component/EditComponent/edit.component";
import {AddOfferComponent} from "../component/AddOfferComponent/addOffer.component";
import {RouterConfig} from "@angular/router";
import {LogComponent} from "../component/LogComponent/log.component";
export const editRoutes: RouterConfig = [
    {
        path: 'edit',
        component: EditComponent,
        children: [
            { path: 'add',  component: AddOfferComponent },
            { path : 'log', component : LogComponent}

        ]
    }
];