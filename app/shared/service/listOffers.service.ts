import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";


import {Vendeur} from "../model/vendeur";
import {DispoOffre} from "../model/dispoOffre";
import {Offre} from "../model/offre";
import {Vente} from "../model/vente";
import {Historique} from "../model/hist";




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

    getAllDispo(): Observable <DispoOffre[]>{

        this.RestUrl="http://localhost:8080/offres/allDisp";
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

    modifDisp(idOffre,idVendeur,quantite){
        let headers = new Headers({
            'Content-Type':'application/json',
            'Accept':'application/json'
        });
        this.RESTurl = "http://localhost:8080/offres/modifDisp";
        var res : DispoOffre = new DispoOffre;
        var qConverted : number = parseInt(quantite);
        res.idOffre=idOffre;
        res.idVendeur=idVendeur;
        res.quantite=qConverted;

        var disp= JSON.stringify(res);

        var jsonobj = JSON.parse(disp);

        return this._http.post(this.RESTurl,jsonobj,headers).map(
            res => res.json()
        );


    }

    modifOffre(o: Offre){
        let headers = new Headers({
            'Content-Type':'application/json',
            'Accept':'application/json'
        });

        this.RESTurl = "http://localhost:8080/offres/editOffre";

        console.log("offres is modified");


        return this._http.post(this.RESTurl,o,headers).map(res => res.json());

    }

    delOffre(idOffre:number): Observable <string>{
        let headers = new Headers({
            'Content-Type':'application/json',
            'Accept':'application/json'
        });

        this.RESTurl="http://localhost:8080/offres/"+idOffre;

       return this._http.delete(this.RESTurl).map(res => res.json());


    }

    logVente(v : Vente){
        let headers = new Headers({
            'Content-Type':'application/json',
            'Accept':'application/json'
        });
        this.RESTurl="http://localhost:8080/offres/vente";

        return this._http.post(this.RESTurl,v,headers).map(res => res.json());

    }

    getHistorique():Observable<Historique[]>{

        this.RestUrl="http://localhost:8080/offres/historique";
        return this._http.get(this.RestUrl).map(res => res.json());
    }


}