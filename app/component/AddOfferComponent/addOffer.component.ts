
import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import {ListOffersService} from "../../shared/service/listOffers.service";
import {Offre} from "../../shared/model/offre";
import {Vendeur} from "../../shared/model/vendeur";


@Component({
    selector: 'add-offer',
    templateUrl: 'app/component/AddOfferComponent/addOffer.component.html',
    styleUrls : ['app/component/AddOfferComponent/addOffer.component.css'],
    directives : [FORM_DIRECTIVES],
    providers:[ListOffersService]

})


export class AddOfferComponent extends OnInit {
    o :Offre;
    status : string;
    constructor(private _listVen : ListOffersService){
        super();
    }

    addOffre(offre){

        this._listVen.postOffer(offre).subscribe(
            data => this.o = data,
            error => this.status = "Somethings append",
            ( )=> console.log("Done")
        );

    }
    Vendeurs : Vendeur[];
    ngOnInit() {
        this.ListVendeurs();

    }

    ListVendeurs (){
        this._listVen.getVendeurs().subscribe(
            data => this.Vendeurs = data,
            error => console.log("not done"),
            ()=> console.log("done")

        )
    }

}