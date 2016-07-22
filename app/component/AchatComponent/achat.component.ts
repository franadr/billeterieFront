

import {Component,Input,OnInit} from "@angular/core";
import {Offre} from "../../shared/model/offre";
import {DispoOffre} from "../../shared/model/dispoOffre";
import {ListOffersService} from "../../shared/service/listOffers.service";
import {Vendeur} from "../../shared/model/vendeur";
import {MaterializeDirective} from "angular2-materialize/dist/index";
@Component(
    {
        selector: 'achat',
        templateUrl : 'app/component/AchatComponent/achat.component.html',
        directives : [MaterializeDirective],
        providers : [ListOffersService]
    }

)


export class AchatComponent extends OnInit{
    constructor(private _listoffers : ListOffersService){
        super();
    }

    ngOnInit(){
        this.ListOffers();
        this.ListVendeur();
    }


    ListOffres : Offre[];
    DispoOffres : DispoOffre[];
    Vendeurs : Vendeur[];
    SelectedOffre: Offre;
    status : string;

    ListOffers(){

        this._listoffers.getOffers().subscribe(
            data => this.ListOffres = data,
            error => this.status =  "/",
            ( )=> console.log("Done")
        )
    }

    ListVendeur() {
        this._listoffers.getVendeurs().subscribe(
            data => this.Vendeurs = data,
            error => console.log("not done"),
            ()=> console.log("done")
        )
        return this.Vendeurs;
    }

    OnSelect(offre : Offre){
        this.SelectedOffre = new Offre();
        this.SelectedOffre=offre;
        console.log(offre.titre);
    }

    }