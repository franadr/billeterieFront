import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";


import {Vendeur} from "../model/vendeur";
import {DispoOffre} from "../model/dispoOffre";
import {Offre} from "../model/offre";




@Injectable()
export class ListOffersService {
    private RESTurl : string;
    constructor(private _http: Http){

    }
    RestUrl : string;
    getOffers(): Observable <Offre[]>{
    this.RestUrl = "http://localhost:8080/offres";
        return this._http.get(this.RestUrl).map(res => res.json());

    }
    
    getDispo(idOffre :number): Observable <DispoOffre[]>{

        this.RestUrl="http://localhost:8080/offres/"+idOffre;
            return this._http.get(this.RestUrl).map(res => res.json());
    }

    getVendeurs():Observable <Vendeur[]>{

        this.RestUrl="http://localhost:8080/offres/vendeurs";
        return this._http.get(this.RestUrl).map(res => res.json());
    }

    postOffer(o : Offre){
        let headers = new Headers({
            'Content-Type':'application/json',
            'Accept':'application/json'
        });

        this.RESTurl = "http://localhost:8080/offres";

        var offres = JSON.stringify(o);
        console.log("offres is created");
        var jsonObj = JSON.parse(offres);
        console.log(jsonObj);
        return this._http.post(this.RESTurl,jsonObj,headers).map(res => res.json());
    }


}