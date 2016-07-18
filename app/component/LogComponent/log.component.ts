import {Component, Input,OnInit} from '@angular/core';
import {ListOffersService} from '../../shared/service/listOffers.service';
import {DispoOffre} from "../../shared/model/dispoOffre";
import {Vendeur} from "../../shared/model/vendeur";
import { Offre } from "../../shared/model/offre";
import {ListDispComponent} from "../ListDispComponent/listDisp.component";
@Component({
    selector : 'log',
    templateUrl: 'app/component/LogComponent/log.component.html',
    styleUrls: ['app/component/LogComponent/log.component.css'],
    directives:[ListDispComponent],
    providers:[ListOffersService]

})


export class LogComponent implements OnInit{

    constructor(private _listoffers:ListOffersService, private _listVen : ListOffersService) {

    }

    DispoOffres:DispoOffre[];
    Vendeurs : Vendeur[];
    Offres : Offre[];

    @Input()
    idOffre:number;

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
        console.log(this.DispoOffres[1].nom);
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
}