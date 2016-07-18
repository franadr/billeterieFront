import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MaterializeDirective} from "angular2-materialize/dist/index";




@Component({
    selector : 'my-dashboard',
    templateUrl: 'app/component/DashboardComponent/dashboard.component.html',
    styleUrls:['app/component/DashboardComponent/dashboard.component.css'],
    directives:[ROUTER_DIRECTIVES,MaterializeDirective]

})

export class DashboardComponent {


}