import { RouterConfig, provideRouter } from "@angular/router";
import {ListOffersComponent} from "../component/ListOffersComponent/listOffers.component";

import {EditComponent} from "../component/EditComponent/edit.component";

import {editRoutes} from "./edit.routes";






const routes : RouterConfig = [


    ...editRoutes,
    {
        path:'',
        component:ListOffersComponent
    },
    {
        path:'offres',
        component:ListOffersComponent
    },
    {
        path:'administration',
        component : EditComponent,

    },


];

export const AppRouteProvider = [provideRouter(routes)];



