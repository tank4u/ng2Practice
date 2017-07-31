//It is the root component of what will become a tree of nested components as the application evolves.
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
//required in multiple components so moving 'Providers' array to AppModule
var hero_service_1 = require('./hero.service');
var HeroesComponent = (function () {
    //inject dependencies through Constructor
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.name = 'Angular';
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    ;
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    //lifecycle hook
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    ;
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            //this.heroes.push(hero);
            console.log('saved hero:', hero);
            _this.getHeroes();
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            template: "\n  \t<my-hero-detail-inline [hero]=\"selectedHero\"></my-hero-detail-inline>\n\n  \t<div *ngIf=\"selectedHero\">\n\t\t  <h2>\n\t\t    {{selectedHero.name | uppercase}} is my hero\n\t\t  </h2>\n\t\t  <button (click)=\"gotoDetail()\">View Details</button>\n\n\t\t\t<hr/>\n\n\t\t</div>\n\n\t\t<div>\n\t\t  <label>Hero name:</label> <input #heroName />\n\t\t  <button (click)=\"add(heroName.value); heroName.value=''\">\n\t\t    Add\n\t\t  </button>\n\t\t</div>\n\n  \t<h2>My Heroes</h2>\n\t\t<ul class=\"heroes\">\n\t\t  <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">\n\t\t    <!-- each hero goes here -->\n\t\t    <div>\n\t\t    \t<span class=\"badge\"> {{hero.id}} </span> {{hero.name}}\n\t\t    \t\n\t\t    \t<button class=\"delete\" (click)=\"delete(hero); $event.stopPropagation()\">x</button>\n\t\t    </div>\t\t    \n\t\t  </li>\n\t\t</ul>\t\t\t\t\n\t\t",
            styles: ["\n\t\t.selected {\n\t\t  background-color: #CFD8AA !important;\n\t\t  color: white;\n\t\t}\n\t\t.heroes {\n\t\t  margin: 0 0 2em 0;\n\t\t  list-style-type: none;\n\t\t  padding: 0;\n\t\t  width: 15em;\n\t\t}\n\t\t.heroes li {\n\t\t  cursor: pointer;\n\t\t  position: relative;\n\t\t  left: 0;\n\t\t  background-color: #EEE;\n\t\t  margin: .5em;\n\t\t  padding: .3em 0;\n\t\t  height: 1.6em;\n\t\t  border-radius: 4px;\n\t\t}\n\t\t.heroes li.selected:hover {\n\t\t  background-color: #BBD8DC !important;\n\t\t  color: white;\n\t\t}\n\t\t.heroes li:hover {\n\t\t  color: #607D8B;\n\t\t  background-color: #DDD;\n\t\t  left: .1em;\n\t\t}\n\t\t.heroes .text {\n\t\t  position: relative;\n\t\t  top: -3px;\n\t\t}\n\t\t.heroes .badge {\n\t\t  display: inline-block;\n\t\t  font-size: small;\n\t\t  color: white;\n\t\t  padding: 0.8em 0.7em 0 0.7em;\n\t\t  background-color: #607D8B;\n\t\t  line-height: 1em;\n\t\t  position: relative;\n\t\t  left: -1px;\n\t\t  top: -4px;\n\t\t  height: 1.8em;\n\t\t  margin-right: .8em;\n\t\t  border-radius: 4px 0 0 4px;\n\t\t}\n\t\tbutton.delete {\n\t\t  float:right;\n\t\t  line-height: 1em;\n\t\t  top: -4px;\n\t\t  background-color: gray !important;\n\t\t  color:white;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//gives zoneAwareError for system.js, only one Component per file??
/*export class MyComponent {
    title = 'Tank is Hero',
    hero = 'TankMan'
}*/
//# sourceMappingURL=heroes.component.js.map