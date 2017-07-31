//Defines AppModule, the root module that tells Angular how to assemble the application. 
//Right now it declares only the AppComponent. Soon there will be more components to declare.

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } 	 from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


//custom routing module
import { AppRoutingModule } from './app-routing.module';

//services
import { HeroService } from './hero.service';
	// Imports for loading & configuring the in-memory data service
import { InMemoryDataService }  from './in-memory-data.service';

//components
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailInlineComponent } from './hero-detail-inline.component';
import { HeroSearchComponent } from './hero-search.component';


@NgModule({
  imports:	[ 
	  	BrowserModule, 
	  	FormsModule,
	  	AppRoutingModule,
	  	HttpModule,
	  	InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations:	[ 
  		AppComponent, 
  		HeroesComponent, 
  		HeroDetailComponent,
  		DashboardComponent,
  		HeroDetailInlineComponent,
  		HeroSearchComponent
  ],
  providers: 	[ 
  	HeroService
  ],
  bootstrap:	[ 
  		AppComponent 
  ]
})

export class AppModule { }
