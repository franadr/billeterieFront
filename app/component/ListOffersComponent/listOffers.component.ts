import {Component, Input, OnInit, ElementRef} from '@angular/core';
import { ListOffersService } from '../../shared/service/listOffers.service';
import {Offre} from "../../shared/model/offre";
import { MaterializeDirective } from 'angular2-materialize';
import {DispoOffre} from '../../shared/model/dispoOffre';
import { ListDispComponent } from '../ListDispComponent/listDisp.component';

@Component({
    selector : 'liste-offres',
    directives : [MaterializeDirective,ListDispComponent],
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
            error => this.status = "Somethings append",
            ( )=> console.log("Done")
        )
    }

    
}

