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
var EditOfferComponent = (function (_super) {
    __extends(EditOfferComponent, _super);
    function EditOfferComponent(_listoffers) {
        _super.call(this);
        this._listoffers = _listoffers;
    }
    EditOfferComponent.prototype.ngOnInit = function () {
        this.ListOffre();
    };
    EditOfferComponent.prototype.ListOffre = function () {
        var _this = this;
        this._listoffers.getOffers().subscribe(function (data) { return _this.Offres = data; }, function (error) { return console.log("not done"); }, function () { return console.log("done"); });
    };
    EditOfferComponent.prototype.onselect = function (Offre) {
        this.SelectedOffer = Offre;
    };
    EditOfferComponent.prototype.editOffre = function (offre) {
        var _this = this;
        this._listoffers.modifOffre(offre).subscribe(function (data) { return _this.status = JSON.stringify(data); }, function (err) { return _this.status = err; }, function () { return console.log("Done"); });
    };
    EditOfferComponent.prototype.delOffre = function (idOffre) {
        var _this = this;
        console.log(idOffre);
        this._listoffers.delOffre(idOffre).subscribe(function (data) { return _this.status = JSON.stringify(data); }, function (err) { return _this.status = err; }, function () { return console.log("Done"); });
    };
    EditOfferComponent.prototype.CatchErrorCode = function (code) {
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
            case 200:
                res = 'Done !';
                break;
            default:
                res = 'Unknown error';
                break;
        }
        return res;
    };
    EditOfferComponent = __decorate([
        core_1.Component({
            selector: 'edit-offer',
            templateUrl: 'app/component/EditOfferComponent/editOffer.component.html',
            styleUrls: ['app/component/EditOfferComponent/editOffer.component.css'],
            directives: [index_1.MaterializeDirective],
            providers: [listOffers_service_1.ListOffersService]
        }), 
        __metadata('design:paramtypes', [listOffers_service_1.ListOffersService])
    ], EditOfferComponent);
    return EditOfferComponent;
}(core_1.OnInit));
exports.EditOfferComponent = EditOfferComponent;
//# sourceMappingURL=editOffer.component.js.map