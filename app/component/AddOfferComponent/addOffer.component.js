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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var listOffers_service_1 = require("../../shared/service/listOffers.service");
var index_1 = require("angular2-materialize/dist/index");
var AddOfferComponent = (function (_super) {
    __extends(AddOfferComponent, _super);
    function AddOfferComponent(_listVen) {
        _super.call(this);
        this._listVen = _listVen;
    }
    AddOfferComponent.prototype.addOffre = function (offre) {
        var _this = this;
        this._listVen.postOffer(offre).subscribe(function (data) { return _this.status = 'Offre ajouté'; }, function (err) { return _this.status = _this.CatchErrorCode(err); }, function () { return console.log("Done"); });
    };
    AddOfferComponent.prototype.ngOnInit = function () {
        this.ListVendeurs();
    };
    AddOfferComponent.prototype.ListVendeurs = function () {
        var _this = this;
        this._listVen.getVendeurs().subscribe(function (data) { return _this.Vendeurs = data; }, function (err) { return _this.status = _this.CatchErrorCode(err); }, function () { return console.log("done"); });
    };
    AddOfferComponent.prototype.CatchErrorCode = function (code) {
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
    AddOfferComponent = __decorate([
        core_1.Component({
            selector: 'add-offer',
            templateUrl: 'app/component/AddOfferComponent/addOffer.component.html',
            styleUrls: ['app/component/AddOfferComponent/addOffer.component.css'],
            directives: [common_1.FORM_DIRECTIVES, index_1.MaterializeDirective],
            providers: [listOffers_service_1.ListOffersService]
        }), 
        __metadata('design:paramtypes', [listOffers_service_1.ListOffersService])
    ], AddOfferComponent);
    return AddOfferComponent;
}(core_1.OnInit));
exports.AddOfferComponent = AddOfferComponent;
//# sourceMappingURL=addOffer.component.js.map