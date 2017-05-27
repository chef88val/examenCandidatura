"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var client_1 = require("../../client");
var HomeComponent = (function () {
    function HomeComponent(_ListService) {
        this._ListService = _ListService;
        this.txtfilter = "";
        this.filter = new client_1.Client();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ListService.getClients().subscribe(function (client) { _this.client = client; });
        /* this._ListService.getClients().subscribe(data =>{
           console.log(data)
         });*/
    };
    HomeComponent.prototype.findClient = function () {
        this._ListService.getClients().subscribe();
    };
    HomeComponent.prototype.setFriend = function (param) {
        this.filter.name = param;
    };
    HomeComponent.prototype.setProfe = function (param) {
        //this.filter.professions =param;
        console.log(param);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html' //,
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
