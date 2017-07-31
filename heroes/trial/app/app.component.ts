/*

The above code will import the Component and View package from angular2/core.

The @Component is an Angular 2 decorator that allows you to associate metadata with the component class.

The my-app can be used as HTML tag to injecting and can be used as a component.

The @view contains a template that tells Angular how to render a view.

The export specifies that, this component will be available outside the file.

*/

import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app'
})

@View({
  template: '<h2>My First Angular 2 App</h2>'
})

export class AppComponent {

}