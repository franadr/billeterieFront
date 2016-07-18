

import {Component} from "@angular/core";
import {MaterializeDirective} from "angular2-materialize/dist/index";
import {ROUTER_DIRECTIVES} from "@angular/router";


@Component({
    selector:'edit-main',
    templateUrl:'app/component/EditComponent/edit.component.html',
    styleUrls : ['app/component/EditComponent/edit.component.css'],
    directives: [MaterializeDirective,ROUTER_DIRECTIVES]


})


export class EditComponent{


}