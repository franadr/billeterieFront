import {Component, Input,OnInit} from '@angular/core';
import {ListOffersService} from '../../shared/service/listOffers.service';
import {DispoOffre} from "../../shared/model/dispoOffre";
import {Vendeur} from "../../shared/model/vendeur";
import { Offre } from "../../shared/model/offre";
import {ListDispComponent} from "../ListDispComponent/listDisp.component";
import {MaterializeDirective} from "angular2-materialize/dist/index";
import {FORM_DIRECTIVES} from "@angular/common";
@Component({
    selector : 'log',
    templateUrl: 'app/component/LogComponent/log.component.html',
    styleUrls: ['app/component/LogComponent/log.component.css'],
    directives:[ListDispComponent,MaterializeDirective],
    providers:[ListOffersService]

})


export class LogComponent implements OnInit{

    constructor(private _listoffers:ListOffersService, private _listVen : ListOffersService) {

    }

    DispoOffres:DispoOffre[];
    Vendeurs : Vendeur[];
    Offres : Offre[];

    @Input()
    idOffre:number = 1;
    idVendeur:number;

    ngOnInit() {
        this.ListVendeur();
        this.ListOffre();
    }


    ListDispo(idOffre:number):DispoOffre[] {


        this._listoffers.getDispo(idOffre).subscribe(
            data => this.DispoOffres = data,
            error => console.log("not done"),
            ()=> console.log("done")
        )

        return this.DispoOffres;
    }


    ListVendeur(){
        this._listVen.getVendeurs().subscribe(
            data => this.Vendeurs = data,
            error => console.log("not done"),
            ()=> console.log("done")

        )
        return this.Vendeurs;

    }

    ListOffre(){
        this._listoffers.getOffers().subscribe(
            data => this.Offres = data,
            error => console.log("not done"),
            () => console.log("done")
        )
    }

    test(){
        console.log("TESTOK");
    }
}