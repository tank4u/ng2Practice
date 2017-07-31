import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero } 										from './hero';
import { HeroService } 							from './hero.service';

import 'rxjs/add/operator/switchMap';

@Component ({
	selector:'my-hero-detail',
	template:`
		<div *ngIf="hero">
	  	<h2>{{hero.name}} details!</h2>
	  	<div><label>id: </label>{{hero.id}}</div>
	  	<div>
	  		<label>name: </label>
	  		<input [(ngModel)]="hero.name" placeholder="name" />
	  	</div>
	  </div>

	  <button (click)="save()">Save</button>
	  <button (click)="goBack()"> Back </button>
	`,
	styles: [`
		label {
		  display: inline-block;
		  width: 3em;
		  margin: .5em 0;
		  color: #607D8B;
		  font-weight: bold;
		}
		input {
		  height: 2em;
		  font-size: 1em;
		  padding-left: .4em;
		}
		button {
		  margin-top: 20px;
		  font-family: Arial;
		  background-color: #eee;
		  border: none;
		  padding: 5px 10px;
		  border-radius: 4px;
		  cursor: pointer; cursor: hand;
		}
		button:hover {
		  background-color: #cfd8dc;
		}
		button:disabled {
		  background-color: #eee;
		  color: #ccc; 
		  cursor: auto;
		}
	`]
})

export class HeroDetailComponent implements OnInit {
	
	@Input()
	hero: Hero;

	constructor(
		private heroService: HeroService, 
		private location: Location,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		console.log('params', this.route.params);

		//+params['id'] -> '+' to cast it to number.  Route parameters are always strings.
		this.route.params
	    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
	    .subscribe(hero => this.hero = hero);
	}

	save(): void {
		this.heroService.update(this.hero)
			.then(hero1 => console.log(hero1))
    	.then(() => this.goBack());
	}

	goBack(): void {
	  this.location.back();
	}
}