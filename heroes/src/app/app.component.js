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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Tour Of Heroes";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t<h1>{{title}}</h1>\n  \t<nav>\n\t     <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n\t     <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n\t  </nav>\n   \t<router-outlet></router-outlet>\n  ",
            //styleUrls: ['./app.component.css'],
            styles: ["\n  \th1 {\n\t\t  font-size: 1.2em;\n\t\t  color: #999;\n\t\t  margin-bottom: 0;\n\t\t}\n\t\th2 {\n\t\t  font-size: 2em;\n\t\t  margin-top: 0;\n\t\t  padding-top: 0;\n\t\t}\n\t\tnav a {\n\t\t  padding: 5px 10px;\n\t\t  text-decoration: none;\n\t\t  margin-top: 10px;\n\t\t  display: inline-block;\n\t\t  background-color: #eee;\n\t\t  border-radius: 4px;\n\t\t}\n\t\tnav a:visited, a:link {\n\t\t  color: #607D8B;\n\t\t}\n\t\tnav a:hover {\n\t\t  color: #039be5;\n\t\t  background-color: #CFD8DC;\n\t\t}\n\t\tnav a.active {\n\t\t  color: #039be5;\n\t\t}\n\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map