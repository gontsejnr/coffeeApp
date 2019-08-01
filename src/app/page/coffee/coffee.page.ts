import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.page.html',
  styleUrls: ['./coffee.page.scss'],
})
export class CoffeePage implements OnInit {

  // @ViewChild(Slides) slides: Slides;


  imageArray: any = [];

  constructor(public router: Router) {

    // this.payment = this.payment + this.prices[0];

    this.imageArray = [{'image': '../assets/photos/rooibos.jpeg'},
                        {'image': '../assets/photos/rooibosMilk.jpeg'},
                        {'image': '../assets/photos/chai.jpeg'},
                        {'image': '../assets/photos/espresso.jpeg'},
                        {'image': '../assets/photos/seriousRedCappuccino.jpeg'},
                        {'image': '../assets/photos/redLatte.jpeg'},
                        {'image': '../assets/photos/decadent.jpeg'},
                        {'image': '../assets/photos/caffeMocha.jpeg'},
                        {'image': '../assets/photos/caribbean.jpeg'}
  ]
   }
  ngOnInit() {
  }
 order(){
   this.router.navigateByUrl('order');
 }

}
