

import {Component,OnInit} from "@angular/core";
import {ListOffersService} from "../../shared/service/listOffers.service";
import {Historique} from "../../shared/model/hist";
import {DateFormat} from "../../shared/pipes/dateFormat";
@Component({
    selector : 'historique',
    templateUrl : 'app/component/LoggingComponent/logging.component.html',
    styleUrls : ['app/component/LoggingComponent/logging.component.css'],
    providers : [ListOffersService],
    pipes :[DateFormat]
})



export class LoggingComponent extends OnInit{
    ngOnInit() {
        this.getHistorique();
    }
constructor(private _service : ListOffersService){
    super();
}

    Historique : Historique[];



    getHistorique(){
        this._service.getHistorique().subscribe(
            data => this.Historique=data,
            error => console.log("Historique not available")
        );




    }
}