

import {Component,OnInit} from "@angular/core";
import {ListOffersService} from "../../shared/service/listOffers.service";
import {Offre} from "../../shared/model/offre";
import {MaterializeDirective} from "angular2-materialize/dist/index";
import {NgForm}    from '@angular/common';



@Component({
    selector : 'edit-offer',
    templateUrl : 'app/component/EditOfferComponent/editOffer.component.html',
    styleUrls : ['app/component/EditOfferComponent/editOffer.component.css'],
    directives:[MaterializeDirective],
    providers:[ListOffersService]
})


export class EditOfferComponent extends OnInit{
    private status;
    constructor(private _listoffers:ListOffersService){
        super();
    }
    ngOnInit() {
        this.ListOffre();
    }


    idOffre: number;
    Offres: Offre[];
    SelectedOffer: Offre;

    ListOffre(){
        this._listoffers.getOffers().subscribe(
            data => this.Offres = data,
            error => console.log("not done"),
            () => console.log("done")
        )
    }

    onselect(Offre){
        this.SelectedOffer=Offre;



    }

    editOffre(offre){
        this._listoffers.modifOffre(offre).subscribe(
            data => this.status = 'Offre ajouté',
            err => this.status = err,
            ( )=> console.log("Done")
        );

    }

    delOffre(idOffre){

        console.log(idOffre);

        this._listoffers.delOffre(idOffre).subscribe(
            data => this.status = "ok",
            err => this.status = err,
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
            case 200:
                res = 'Done !';
                break;
            default :
                res = 'Unknown error';
                break;
        }


        return res;
    }


}