import {Component,OnInit} from '@angular/core';
import {ListOffersService} from '../../shared/service/listOffers.service';
import {DispoOffre} from "../../shared/model/dispoOffre";
import {Vendeur} from "../../shared/model/vendeur";
import { Offre } from "../../shared/model/offre";
import {ListDispComponent} from "../ListDispComponent/listDisp.component";
import {MaterializeDirective} from "angular2-materialize/dist/index";

@Component({
    selector : 'log',
    templateUrl: 'app/component/LogComponent/log.component2.html',
    styleUrls: ['app/component/LogComponent/log.component.css'],
    directives:[ListDispComponent,MaterializeDirective],
    providers:[ListOffersService]

})


export class LogComponent implements OnInit{

    constructor(private _listoffers:ListOffersService, private _listVen : ListOffersService) {

    }

    ngOnInit() {
        this.ListOffre();
        this.ListVendeur();


    }
    DispoOffres:DispoOffre[];
    Vendeurs : Vendeur[];
    Offres : Offre[];
    offre : Offre;
    SelectedDisp:DispoOffre=new DispoOffre();

    idOffre:number;

    ListDispo(idOffre:number){

        this._listoffers.getDispo(idOffre).subscribe(
            data => this.DispoOffres = data,
            error => console.log("not done"),
            ()=> console.log("GetAllDispoDone")
        )


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

    DispoModif(idOffre,idVendeur,quantite){
        this._listoffers.modifDisp(idOffre,idVendeur,quantite).subscribe(
            data => console.log("ModifDone"),
            error => " "
        )

    }

    onSelect(idOffre,idVendeur,quantite){
        this.SelectedDisp.idOffre=idOffre;
        this.SelectedDisp.idVendeur=idVendeur;
        this.SelectedDisp.quantite=quantite;


        console.log(this.SelectedDisp.idOffre);
    }
}