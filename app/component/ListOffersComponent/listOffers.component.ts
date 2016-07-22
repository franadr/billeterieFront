import {Component, Input, OnInit, ElementRef} from '@angular/core';
import { ListOffersService } from '../../shared/service/listOffers.service';
import {Offre} from "../../shared/model/offre";
import { MaterializeDirective } from 'angular2-materialize';
import {DispoOffre} from '../../shared/model/dispoOffre';
import { ListDispComponent } from '../ListDispComponent/listDisp.component';
import {AchatComponent} from "../AchatComponent/achat.component";

@Component({
    selector : 'liste-offres',
    directives : [MaterializeDirective,ListDispComponent,AchatComponent],
    templateUrl :'app/component/ListOffersComponent/listOffers.component.html',

    providers : [ListOffersService]
})





export class ListOffersComponent implements OnInit{

    constructor (private _listoffers : ListOffersService, ul: ElementRef){

    }


    ngOnInit() {
        this.ListOffers();

        
    }

    status: string;
    ListOffres : Offre[];
    DispoOffres : DispoOffre[];

    ListOffers(){

        this._listoffers.getOffers().subscribe(
            data => this.ListOffres = data,
            error => this.status =  this.CatchErrorCode(error),
            ( )=> console.log("Done")
        )
    }

    CatchErrorCode(code : number) : string{
        var res : string;

        switch(code){
            case 500:
                res = 'Internal server error code';
                break;
            case 404:
                res = 'Ressource not found code ';
                break;
            case 405:
                res = 'Method not allowed code';
                break;
            default :
                res = 'Unknown error';
                break;
        }


        return res;
    }

    
}

