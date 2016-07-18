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
var ListDispComponent = (function () {
    function ListDispComponent(_listoffers) {
        this._listoffers = _listoffers;
    }
    ListDispComponent.prototype.ngOnInit = function () {
        this.ListDispo(this.idOffre);
    };
    ListDispComponent.prototype.ListDispo = function (idOffre) {
        var _this = this;
        this._listoffers.getDispo(idOffre).subscribe(function (data) { return _this.DispoOffres = data; }, function (error) { return console.log("not done"); }, function () { return console.log("done"); });
        return this.DispoOffres;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ListDispComponent.prototype, "idOffre", void 0);
    ListDispComponent = __decorate([
        core_1.Component({
            selector: 'list-dispo',
            template: "\n                   <div class=\"DispoTitle\">Disponilit\u00E9s :</div>\n                <ul *ngFor=\"let disp of DispoOffres\">\n                {{disp.nom}},{{disp.prenom}}, ({{disp.location}}) : {{disp.quantite}}\n                </ul>\n                ",
            providers: [listOffers_service_1.ListOffersService]
        }), 
        __metadata('design:paramtypes', [listOffers_service_1.ListOffersService])
    ], ListDispComponent);
    return ListDispComponent;
}());
exports.ListDispComponent = ListDispComponent;
//# sourceMappingURL=listDisp.component.js.map