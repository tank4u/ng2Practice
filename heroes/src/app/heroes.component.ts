//It is the root component of what will become a tree of nested components as the application evolves.

import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router }   from '@angular/router';

//required in multiple components so moving 'Providers' array to AppModule
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',

  template: `
  	<my-hero-detail-inline [hero]="selectedHero"></my-hero-detail-inline>

  	<div *ngIf="selectedHero">
		  <h2>
		    {{selectedHero.name | uppercase}} is my hero
		  </h2>
		  <button (click)="gotoDetail()">View Details</button>

			<hr/>

		</div>
		<div>
		  <label>Hero name:</label> <input #heroName />
		  <button (click)="add(heroName.value); heroName.value=''">
		    Add
		  </button>
		</div>

  	<h2>My Heroes</h2>
		<ul class="heroes">
		  <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
		    <!-- each hero goes here -->
		    <div>
		    	<span class="badge"> {{hero.id}} </span> {{hero.name}}
		    	
		    	<button class="delete" (click)="delete(hero); $event.stopPropagation()">x</button>
		    </div>		    
		  </li>
		</ul>				
		`,

	styles: [`
		.selected {
		  background-color: #CFD8AA !important;
		  color: white;
		}
		.heroes {
		  margin: 0 0 2em 0;
		  list-style-type: none;
		  padding: 0;
		  width: 15em;
		}
		.heroes li {
		  cursor: pointer;
		  position: relative;
		  left: 0;
		  background-color: #EEE;
		  margin: .5em;
		  padding: .3em 0;
		  height: 1.6em;
		  border-radius: 4px;
		}
		.heroes li.selected:hover {
		  background-color: #BBD8DC !important;
		  color: white;
		}
		.heroes li:hover {
		  color: #607D8B;
		  background-color: #DDD;
		  left: .1em;
		}
		.heroes .text {
		  position: relative;
		  top: -3px;
		}
		.heroes .badge {
		  display: inline-block;
		  font-size: small;
		  color: white;
		  padding: 0.8em 0.7em 0 0.7em;
		  background-color: #607D8B;
		  line-height: 1em;
		  position: relative;
		  left: -1px;
		  top: -4px;
		  height: 1.8em;
		  margin-right: .8em;
		  border-radius: 4px 0 0 4px;
		}
		button.delete {
		  float:right;
		  line-height: 1em;
		  top: -4px;
		  background-color: gray !important;
		  color:white;
		}
	`]
	//styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit { 

	//inject dependencies through Constructor
	constructor(
		private heroService: HeroService,
		private router: Router
	) { }

	name = 'Angular';
	selectedHero: Hero;
	heroes: Hero[];

	onSelect(hero: Hero) : void {
		this.selectedHero = hero;
	};

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	//lifecycle hook
	ngOnInit(): void {
		this.getHeroes();
  };

  add(name: string): void {
  	name = name.trim();
  	if (!name) { return; }
	  
	  this.heroService.create(name)
	    .then(hero => {
	      //this.heroes.push(hero);
	      console.log('saved hero:', hero);
	      this.getHeroes();
	      this.selectedHero = null;
	    });
  }

  delete(hero: Hero): void {
	  this.heroService
	      .delete(hero.id)
	      .then(() => {
	        this.heroes = this.heroes.filter(h => h !== hero);
	        if (this.selectedHero === hero) { this.selectedHero = null; }
	      });
	}

  gotoDetail(): void {
  	this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
 
//gives zoneAwareError for system.js, only one Component per file??
/*export class MyComponent {
	title = 'Tank is Hero',
	hero = 'TankMan'
}*/
