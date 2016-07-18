import { RouterConfig, provideRouter } from "@angular/router";
import {ListOffersComponent} from "../component/ListOffersComponent/listOffers.component";
import {DashboardComponent} from "../component/DashboardComponent/dashboard.component";
import {EditComponent} from "../component/EditComponent/edit.component";
import {AddOfferComponent} from "../component/AddOfferComponent/addOffer.component";
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
        path:'edit',
        component : EditComponent,

    }

];

export const AppRouteProvider = [provideRouter(routes)];



