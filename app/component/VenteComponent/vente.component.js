"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var listOffers_service_1 = require("../../shared/service/listOffers.service");
var index_1 = require("angular2-materialize/dist/index");
var VenteComponent = (function (_super) {
    __extends(VenteComponent, _super);
    function VenteComponent(_listoffers) {
        _super.call(this);
        this._listoffers = _listoffers;
    }
    VenteComponent.prototype.ngOnInit = function () {
        this.ListOffers();
        this.ListVendeur();
    };
    VenteComponent.prototype.ListOffers = function () {
        var _this = this;
        this._listoffers.getOffers().subscribe(function (data) { return _this.ListOffres = data; }, function (error) { return _this.status = "/"; }, function () { return console.log("Done"); });
    };
    VenteComponent.prototype.ListVendeur = function () {
        var _this = this;
        this._listoffers.getVendeurs().subscribe(function (data) { return _this.Vendeurs = data; }, function (error) { return console.log("not done"); }, function () { return console.log("done"); });
        return this.Vendeurs;
    };
    VenteComponent.prototype.OnSelectOffre = function (offre) {
        this.SelectedOffer = offre;
        console.log(this.SelectedOffer);
        this.ListDispo(this.SelectedOffer.idOffre);
    };
    VenteComponent.prototype.OnSelectVendeur = function (vendeur) {
        this.SelectedVendeur = vendeur;
        console.log(this.SelectedVendeur);
    };
    VenteComponent.prototype.ListDispo = function (idOffre) {
        var _this = this;
        this._listoffers.getDispo(idOffre).subscribe(function (data) { return _this.DispoOffres = data; }, function (error) { return console.log("not done"); }, function () { return console.log("done"); });
    };
    VenteComponent.prototype.test = function (v) {
        console.log(v);
    };
    VenteComponent.prototype.Vente = function (v) {
        var vente = v;
        console.log(v);
        this._listoffers.logVente(v).subscribe(function (data) { return "ok"; }, function (error) { return console.log("not done"); }, function () { return console.log("done"); });
    };
    VenteComponent = __decorate([
        core_1.Component({
            selector: 'achat',
            templateUrl: 'app/component/VenteComponent/vente.component.html',
            directives: [index_1.MaterializeDirective],
            providers: [listOffers_service_1.ListOffersService]
        }), 
        __metadata('design:paramtypes', [listOffers_service_1.ListOffersService])
    ], VenteComponent);
    return VenteComponent;
}(core_1.OnInit));
exports.VenteComponent = VenteComponent;
//# sourceMappingURL=vente.component.js.map