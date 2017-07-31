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
var hero_service_1 = require('./hero.service');
var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    ;
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            template: "\n\t\t<h3>Top Heroes</h3>\n\t\t<div class=\"grid grid-pad\">\n\t\t  <a *ngFor=\"let hero of heroes\"  [routerLink]=\"['/detail', hero.id]\"  class=\"col-1-4\">\n\t\t    <div class=\"module hero\">\n\t\t      <h4>{{hero.name}}</h4>\n\t\t    </div>\n\t\t  </a>\n\t\t</div>\n\t\t<hero-search></hero-search>\n\t",
            //templateUrl: './dashboard.component.html',
            styles: ["\n\t\t[class*='col-'] {\n\t\t  float: left;\n\t\t  padding-right: 20px;\n\t\t  padding-bottom: 20px;\n\t\t}\n\t\t[class*='col-']:last-of-type {\n\t\t  padding-right: 0;\n\t\t}\n\t\ta {\n\t\t  text-decoration: none;\n\t\t}\n\t\t*, *:after, *:before {\n\t\t  -webkit-box-sizing: border-box;\n\t\t  -moz-box-sizing: border-box;\n\t\t  box-sizing: border-box;\n\t\t}\n\t\th3 {\n\t\t  text-align: center; margin-bottom: 0;\n\t\t}\n\t\th4 {\n\t\t  position: relative;\n\t\t}\n\t\t.grid {\n\t\t  margin: 0;\n\t\t}\n\t\t.col-1-4 {\n\t\t  width: 25%;\n\t\t}\n\t\t.module {\n\t\t  padding: 20px;\n\t\t  text-align: center;\n\t\t  color: #eee;\n\t\t  max-height: 120px;\n\t\t  min-width: 120px;\n\t\t  background-color: #607D8B;\n\t\t  border-radius: 2px;\n\t\t}\n\t\t.module:hover {\n\t\t  background-color: #EEE;\n\t\t  cursor: pointer;\n\t\t  color: #607d8b;\n\t\t}\n\t\t.grid-pad {\n\t\t  padding: 10px 0;\n\t\t}\n\t\t.grid-pad > [class*='col-']:last-of-type {\n\t\t  padding-right: 20px;\n\t\t}\n\t\t@media (max-width: 600px) {\n\t\t  .module {\n\t\t    font-size: 10px;\n\t\t    max-height: 75px; }\n\t\t}\n\t\t@media (max-width: 1024px) {\n\t\t  .grid {\n\t\t    margin: 0;\n\t\t  }\n\t\t  .module {\n\t\t    min-width: 60px;\n\t\t  }\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map