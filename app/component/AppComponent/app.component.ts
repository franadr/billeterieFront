import {Component, OnInit} from '@angular/core';
import { ListOffersComponent } from '../ListOffersComponent/listOffers.component';
import { ListOffersService } from '../../shared/service/listOffers.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {DashboardComponent} from "../DashboardComponent/dashboard.component";
import {AddOfferComponent} from "../AddOfferComponent/addOffer.component";

@Component({
    selector : 'my-app',

    templateUrl : 'app/component/AppComponent/app.component.html',
    //StyleUrls : 'app/css/app.component.css'
    directives : [ListOffersComponent,DashboardComponent,ROUTER_DIRECTIVES],


})

export class AppComponent {
    



}