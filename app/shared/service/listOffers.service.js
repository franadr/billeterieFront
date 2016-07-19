"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var dispoOffre_1 = require("../model/dispoOffre");
var ListOffersService = (function () {
    function ListOffersService(_http) {
        this._http = _http;
    }
    ListOffersService.prototype.getOffers = function () {
        this.RestUrl = "http://localhost:8080/offres";
        return this._http.get(this.RestUrl).map(function (res) { return res.json(); });
    };
    ListOffersService.prototype.getDispo = function (idOffre) {
        this.RestUrl = "http://localhost:8080/offres/" + idOffre;
        return this._http.get(this.RestUrl).map(function (res) { return res.json(); });
    };
    ListOffersService.prototype.getAllDispo = function () {
        this.RestUrl = "http://localhost:8080/offres/allDisp";
        return this._http.get(this.RestUrl).map(function (res) { return res.json(); });
    };
    ListOffersService.prototype.getVendeurs = function () {
        this.RestUrl = "http://localhost:8080/offres/vendeurs";
        return this._http.get(this.RestUrl).map(function (res) { return res.json(); });
    };
    ListOffersService.prototype.postOffer = function (o) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        this.RESTurl = "http://localhost:8080/offres";
        var offres = JSON.stringify(o);
        console.log("offres is created");
        var jsonObj = JSON.parse(offres);
        console.log(jsonObj);
        return this._http.post(this.RESTurl, jsonObj, headers).map(function (res) { return res.json(); });
    };
    ListOffersService.prototype.modifDisp = function (idOffre, idVendeur, quantite) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        this.RESTurl = "http://localhost:8080/offres/modifDisp";
        var res = new dispoOffre_1.DispoOffre;
        var qConverted = parseInt(quantite);
        res.idOffre = idOffre;
        res.idVendeur = idVendeur;
        res.quantite = qConverted;
        var disp = JSON.stringify(res);
        var jsonobj = JSON.parse(disp);
        return this._http.post(this.RESTurl, jsonobj, headers).map(function (res) { return res.json(); });
    };
    ListOffersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ListOffersService);
    return ListOffersService;
}());
exports.ListOffersService = ListOffersService;
//# sourceMappingURL=listOffers.service.js.map