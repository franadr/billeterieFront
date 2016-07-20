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
var angular2_materialize_1 = require('angular2-materialize');
var listDisp_component_1 = require('../ListDispComponent/listDisp.component');
var ListOffersComponent = (function () {
    function ListOffersComponent(_listoffers, ul) {
        this._listoffers = _listoffers;
    }
    ListOffersComponent.prototype.ngOnInit = function () {
        this.ListOffers();
    };
    ListOffersComponent.prototype.ListOffers = function () {
        var _this = this;
        this._listoffers.getOffers().subscribe(function (data) { return _this.ListOffres = data; }, function (error) { return _this.status = _this.CatchErrorCode(error); }, function () { return console.log("Done"); });
    };
    ListOffersComponent.prototype.CatchErrorCode = function (code) {
        var res;
        switch (code) {
            case 500:
                res = 'Internal server error code';
                break;
            case 404:
                res = 'Ressource not found code ';
                break;
            case 405:
                res = 'Method not allowed code';
                break;
            default:
                res = 'Unknown error';
                break;
        }
        return res;
    };
    ListOffersComponent = __decorate([
        core_1.Component({
            selector: 'liste-offres',
            directives: [angular2_materialize_1.MaterializeDirective, listDisp_component_1.ListDispComponent],
            templateUrl: 'app/component/ListOffersComponent/listOffers.component.html',
            providers: [listOffers_service_1.ListOffersService]
        }), 
        __metadata('design:paramtypes', [listOffers_service_1.ListOffersService, core_1.ElementRef])
    ], ListOffersComponent);
    return ListOffersComponent;
}());
exports.ListOffersComponent = ListOffersComponent;
//# sourceMappingURL=listOffers.component.js.map