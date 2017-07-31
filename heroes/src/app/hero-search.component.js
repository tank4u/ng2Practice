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
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
// Observable class extensions
require('rxjs/add/observable/of');
// Observable operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
var hero_search_service_1 = require('./hero-search.service');
var HeroSearchComponent = (function () {
    function HeroSearchComponent(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
        console.log(term);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.heroSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    HeroSearchComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    HeroSearchComponent = __decorate([
        core_1.Component({
            selector: 'hero-search',
            template: "\n\t\t<div id=\"search-component\">\n\t\t  <h4>Hero Search</h4>\n\t\t  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n\t\t  <div>\n\t\t  \t<!-- The *ngFor can't do anything with an Observable until we flow it through the async pipe (AsyncPipe). The async pipe subscribes to the Observable and produces the array of heroes to *ngFor. -->\n\n\t\t    <div *ngFor=\"let hero of heroes | async\"\n\t\t         (click)=\"gotoDetail(hero)\" class=\"search-result\" >\n\t\t      {{hero.name}}\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n\t",
            styles: ["\n\t\t.search-result{\n\t\t  border-bottom: 1px solid gray;\n\t\t  border-left: 1px solid gray;\n\t\t  border-right: 1px solid gray;\n\t\t  width:195px;\n\t\t  padding: 5px;\n\t\t  background-color: white;\n\t\t  cursor: pointer;\n\t\t}\n\t\t.search-result:hover {\n\t\t  color: #eee;\n\t\t  background-color: #607D8B;\n\t\t}\n\t\t#search-box{\n\t\t  width: 200px;\n\t\t  height: 20px;\n\t\t}\n\t"],
            providers: [hero_search_service_1.HeroSearchService]
        }), 
        __metadata('design:paramtypes', [hero_search_service_1.HeroSearchService, router_1.Router])
    ], HeroSearchComponent);
    return HeroSearchComponent;
}());
exports.HeroSearchComponent = HeroSearchComponent;
//# sourceMappingURL=hero-search.component.js.map