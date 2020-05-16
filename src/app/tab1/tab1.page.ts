import {Component, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  items = [...Array(20).keys()]

  loadMore(evt){
    setTimeout(() => {
      this.items = [...this.items, ...Array(20).keys()];
      // evt.target.complete();
      this.infiniteScroll.complete();
    }, 1000);
  }

}
