import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs>
    <ion-tab [root]='libraryPage' tabTitle='Library' tabIcon='book'></ion-tab>
    <ion-tab [root]='favoritesPage' tabTitle='Favorites' tabIcon='star'></ion-tab>
  </ion-tabs>
  `,
})
export class TabsPage {
  libraryPage = "LibraryPage";
  favoritesPage = "FavoritesPage";
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
