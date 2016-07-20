
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
            data => this.status = 'Offre ajouté',
            err => this.status = this.CatchErrorCode(err) ,
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
            err => this.status = this.CatchErrorCode(err),
            ()=> console.log("done")

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