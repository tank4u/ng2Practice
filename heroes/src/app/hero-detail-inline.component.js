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
var hero_1 = require('./hero');
var HeroDetailInlineComponent = (function () {
    function HeroDetailInlineComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroDetailInlineComponent.prototype, "hero", void 0);
    HeroDetailInlineComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail-inline',
            template: "\n\t\t<div *ngIf=\"hero\">\n\t  \t<h2>{{hero.name}} details!</h2>\n\t  \t<div><label>id: </label>{{hero.id}}</div>\n\t  \t<div>\n\t  \t\t<label>name: </label>\n\t  \t\t<input [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n\t  \t</div>\n\t  </div>\n\t",
        }), 
        __metadata('design:paramtypes', [])
    ], HeroDetailInlineComponent);
    return HeroDetailInlineComponent;
}());
exports.HeroDetailInlineComponent = HeroDetailInlineComponent;
//# sourceMappingURL=hero-detail-inline.component.js.map