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
var core_1 = require('@angular/core');
var listOffers_service_1 = require('../../shared/service/listOffers.service');
var listDisp_component_1 = require("../ListDispComponent/listDisp.component");
var index_1 = require("angular2-materialize/dist/index");
var LogComponent = (function () {
    function LogComponent(_listoffers, _listVen) {
        this._listoffers = _listoffers;
        this._listVen = _listVen;
    }
    LogComponent.prototype.ngOnInit = function () {
        this.ListOffre();
        this.ListVendeur();
    };
    LogComponent.prototype.ListDispo = function (idOffre) {
        var _this = this;
        this._listoffers.getDispo(idOffre).subscribe(function (data) { return _this.DispoOffres = data; }, function (error) { return console.log("not done"); }, function () { return console.log("GetAllDispoDone"); });
    };
    LogComponent.prototype.ListVendeur = function () {
        var _this = this;
        this._listVen.getVendeurs().subscribe(function (data) { return _this.Vendeurs = data; }, function (error) { return console.log("not done"); }, function () { return console.log("done"); });
        return this.Vendeurs;
    };
    LogComponent.prototype.ListOffre = function () {
        var _this = this;
        this._listoffers.getOffers().subscribe(function (data) { return _this.Offres = data; }, function (error) { return console.log("not done"); }, function () { return console.log("done"); });
    };
    LogComponent.prototype.DispoModif = function (idOffre, idVendeur, quantite) {
        this._listoffers.modifDisp(idOffre, idVendeur, quantite).subscribe(function (data) { return console.log("ModifDone"); }, function (error) { return " "; });
    };
    LogComponent = __decorate([
        core_1.Component({
            selector: 'log',
            templateUrl: 'app/component/LogComponent/log.component2.html',
            styleUrls: ['app/component/LogComponent/log.component.css'],
            directives: [listDisp_component_1.ListDispComponent, index_1.MaterializeDirective],
            providers: [listOffers_service_1.ListOffersService]
        }), 
        __metadata('design:paramtypes', [listOffers_service_1.ListOffersService, listOffers_service_1.ListOffersService])
    ], LogComponent);
    return LogComponent;
}());
exports.LogComponent = LogComponent;
//# sourceMappingURL=log.component.js.map