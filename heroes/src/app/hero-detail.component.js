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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var hero_1 = require('./hero');
var hero_service_1 = require('./hero.service');
require('rxjs/add/operator/switchMap');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, location, route) {
        this.heroService = heroService;
        this.location = location;
        this.route = route;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('params', this.route.params);
        //+params['id'] -> '+' to cast it to number.  Route parameters are always strings.
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .then(function (hero1) { return console.log(hero1); })
            .then(function () { return _this.goBack(); });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            template: "\n\t\t<div *ngIf=\"hero\">\n\t  \t<h2>{{hero.name}} details!</h2>\n\t  \t<div><label>id: </label>{{hero.id}}</div>\n\t  \t<div>\n\t  \t\t<label>name: </label>\n\t  \t\t<input [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n\t  \t</div>\n\t  </div>\n\n\t  <button (click)=\"save()\">Save</button>\n\t  <button (click)=\"goBack()\"> Back </button>\n\t",
            styles: ["\n\t\tlabel {\n\t\t  display: inline-block;\n\t\t  width: 3em;\n\t\t  margin: .5em 0;\n\t\t  color: #607D8B;\n\t\t  font-weight: bold;\n\t\t}\n\t\tinput {\n\t\t  height: 2em;\n\t\t  font-size: 1em;\n\t\t  padding-left: .4em;\n\t\t}\n\t\tbutton {\n\t\t  margin-top: 20px;\n\t\t  font-family: Arial;\n\t\t  background-color: #eee;\n\t\t  border: none;\n\t\t  padding: 5px 10px;\n\t\t  border-radius: 4px;\n\t\t  cursor: pointer; cursor: hand;\n\t\t}\n\t\tbutton:hover {\n\t\t  background-color: #cfd8dc;\n\t\t}\n\t\tbutton:disabled {\n\t\t  background-color: #eee;\n\t\t  color: #ccc; \n\t\t  cursor: auto;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, common_1.Location, router_1.ActivatedRoute])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map