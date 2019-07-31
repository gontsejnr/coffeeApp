import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  coffeeType : string [] = ['Rooibos', 'Classic Chai', 'Red Espresso', 'Red Cappuccino', 'Serious Red Cappuccino', 'Red Latte', 'Decadent Latte', 'Caffe Mocha: Classic', 'Caffe Mocha: Caribbean']
  prices : number [] = [22, 33, 20, 34, 33, 32, 43, 34, 40]
  addOn: string [] = ['Milk', 'Cream', 'Chocolate', 'Honey']
  aPrice: number [] = [11, 8, 9, 9]

  imageArray: any = [];

  payment: number = 0;
  paymentE: number = 0;
  total: number = this.payment + this.paymentE;
  radioB: string;

  constructor(public router: Router) {

    // this.payment = this.payment + this.prices[0];

    this.imageArray = [{'image': '../../assets/photos/rooibos.jpeg'},
                        {'image': '../../assets/photos/rooibosMilk.jpeg'},
                        {'image': '../../assets/photos/chai.jpeg'},
                        {'image': '../../assets/photos/espresso.jpeg'},
                        {'image': '../../assets/photos/seriousRedCappuccino.jpeg'},
                        {'image': '../../assets/photos/redLatte.jpeg'},
                        {'image': '../../assets/photos/decadent.jpeg'},
                        {'image': '../../assets/photos/caffeMocha.jpeg'},
                        {'image': '../../assets/photos/caribbean.jpeg'}
  ]
   }

  ngOnInit() {
    if(this.radioB == this.coffeeType[0]){
      console.log(this.prices[0]);

         this.payment = this.payment + this.prices[0];

         this.total =  this.payment + this.paymentE;
    }
  }

  extra(){
    if(this.radioB == this.addOn[0]){
      console.log(this.aPrice[0]);

      this.paymentE = this.paymentE + this.aPrice[0];

      this.total =  this.payment + this.paymentE;
    }
  }

  // Cost(){
  //   this.total = this.payment + this.paymentE;
  // }
}
