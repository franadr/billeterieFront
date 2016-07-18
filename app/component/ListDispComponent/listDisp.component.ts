import { Component,Input,OnInit } from '@angular/core';
import { DispoOffre } from '../../shared/model/dispoOffre';
import { ListOffersService } from '../../shared/service/listOffers.service';





@Component({
    selector:'list-dispo',
    template:`
                   <div class="DispoTitle">Disponilités :</div>
                <ul *ngFor="let disp of DispoOffres">
                {{disp.nom}},{{disp.prenom}}, ({{disp.location}}) : {{disp.quantite}}
                </ul>
                `,
    providers : [ListOffersService]


})

export class ListDispComponent implements OnInit{

    constructor (private _listoffers : ListOffersService){

    }
    DispoOffres : DispoOffre[];

    @Input()
    idOffre : number;

    ngOnInit() {
        this.ListDispo(this.idOffre);
    }


    ListDispo(idOffre:number):DispoOffre[]{


        this._listoffers.getDispo(idOffre).subscribe(
            data => this.DispoOffres = data,
            error => console.log("not done"),
            ()=> console.log("done")
        )

        return this.DispoOffres;

    }



}