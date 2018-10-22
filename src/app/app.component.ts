import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise(
  	(resolve, reject) => {
  		const date = new Date();
  		setTimeout(
  			() => {
  				resolve(date);
  			}, 2000
  		);
  	}
  )

  appareils = [
  	{
  		name: 'Machine à laver',
  		status: 'allumé'
  	},{
  		name: 'Télévision',
  		status: 'allumé'
  	},
  	{
  		name: 'Ordinateur',
  		status: 'éteint'
  	}
  ];

  posts: any[];

  // posts = [
  // 	{
  // 		title: 'Mon premier post',
  // 		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum laboriosam, inventore distinctio fugit, quos praesentium, exp',
  // 		loveits: 0,
  // 		created_at: new Date()
  // 	},
  // 	{
  // 		title: 'Mon deuxième post',
  // 		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum laboriosam, inventore distinctio fugit, quos praesentium, exp',
  // 		loveits: 1,
  // 		created_at: new Date()
  // 	},{
  // 		title: 'Mon troisième post',
  // 		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum laboriosam, inventore distinctio fugit, quos praesentium, exp',
  // 		loveits: -2,
  // 		created_at: new Date()
  // 	}
  // ]

  constructor() {
  	setTimeout(
  		() => {
  			this.isAuth = true;
  		}, 4000
  	);
  }

  onAllumer() {
  	console.log('On allume tout !');
  }
}
