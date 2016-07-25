

import {Component,Input,OnInit} from "@angular/core";
import {Offre} from "../../shared/model/offre";
import {DispoOffre} from "../../shared/model/dispoOffre";
import {ListOffersService} from "../../shared/service/listOffers.service";
import {Vendeur} from "../../shared/model/vendeur";
import {MaterializeDirective} from "angular2-materialize/dist/index";
import {Vente} from "../../shared/model/vente";
@Component(
    {
        selector: 'achat',
        templateUrl : 'app/component/VenteComponent/vente.component.html',
        directives : [MaterializeDirective],
        providers : [ListOffersService]
    }

)


export class VenteComponent extends OnInit {
    constructor(private _listoffers:ListOffersService) {
        super();
    }

    ngOnInit() {
        this.ListOffers();
        this.ListVendeur();
    }


    ListOffres:Offre[];
    DispoOffres:DispoOffre[];
    Vendeurs:Vendeur[];
    SelectedOffer:Offre;
    SelectedVendeur:Vendeur;
    status:string;

    ListOffers() {

        this._listoffers.getOffers().subscribe(
            data => this.ListOffres = data,
            error => this.status = "/",
            ()=> console.log("Done")
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

    OnSelectOffre(offre) {
        this.SelectedOffer = offre;
        console.log(this.SelectedOffer);
        this.ListDispo(this.SelectedOffer.idOffre);



    }

    OnSelectVendeur(vendeur) {
        this.SelectedVendeur = vendeur;
        console.log(this.SelectedVendeur);
    }

    ListDispo(idOffre:number) {


        this._listoffers.getDispo(idOffre).subscribe(
            data => this.DispoOffres = data,
            error => console.log("not done"),
            ()=> console.log("done")
        )


    }
    test(v){
        console.log(v);
    }

    Vente(v){
      var  vente : Vente = v;




        console.log(v);

        this._listoffers.logVente(v).subscribe(
            data =>  "ok",
            error => console.log("not done"),
            ()=> console.log("done"))
    }
}