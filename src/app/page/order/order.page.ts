import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  coffeeType : string [] = ['Brewed Coffee', 'Cappuccino', 'Green Tea Latte', 'Espresso', 'Hot Chocolate', 'Chai Tea Latte']
  prices : number [] = [22, 33, 20, 34, 33, 32, 43, 34, 40]
  addOn: string [] = ['Milk', 'Cream', 'Chocolate', 'Honey']
  aPrice: number [] = [11, 8, 9, 9]

  payment: number = 0;
  paymentE: number = 0;
  total: number = this.payment + this.paymentE;
  radioB: string;

  constructor(public router: Router) {

   }

  ngOnInit() {
    if(this.radioB == this.coffeeType[0]){
      console.log(this.prices[0]);

         this.payment = this.payment + this.prices[0];

         this.total =  this.payment + this.paymentE;
    }
    if(this.radioB == this.coffeeType[1]){
      console.log(this.prices[1]);

         this.payment = this.payment + this.prices[1];

         this.total =  this.payment + this.paymentE;
    }
    if(this.radioB == this.coffeeType[2]){
      console.log(this.prices[2]);

         this.payment = this.payment + this.prices[2];

         this.total =  this.payment + this.paymentE;
    }
    if(this.radioB == this.coffeeType[3]){
      console.log(this.prices[3]);

         this.payment = this.payment + this.prices[3];

         this.total =  this.payment + this.paymentE;
    }
    if(this.radioB == this.coffeeType[4]){
      console.log(this.prices[4]);

         this.payment = this.payment + this.prices[4];

         this.total =  this.payment + this.paymentE;
    }
    if(this.radioB == this.coffeeType[5]){
      console.log(this.prices[5]);

         this.payment = this.payment + this.prices[5];

         this.total =  this.payment + this.paymentE;
    }
    if(this.radioB == this.coffeeType[6]){
      console.log(this.prices[6]);

         this.payment = this.payment + this.prices[6];

         this.total =  this.payment + this.paymentE;
    }
    if(this.radioB == this.coffeeType[7]){
      console.log(this.prices[7]);

         this.payment = this.payment + this.prices[7];

         this.total =  this.payment + this.paymentE;
    }
    if(this.radioB == this.coffeeType[8]){
      console.log(this.prices[8]);

         this.payment = this.payment + this.prices[8];

         this.total =  this.payment + this.paymentE;
    }
  }

  extra(){
    if(this.radioB == this.addOn[0]){
      console.log(this.aPrice[0]);

      this.paymentE = this.paymentE + this.aPrice[0];

      this.total =  this.payment + this.paymentE;
    }
    if(this.radioB == this.addOn[1]){
      console.log(this.aPrice[1]);

      this.paymentE = this.paymentE + this.aPrice[1];

      this.total =  this.payment + this.paymentE;
    }
    if(this.radioB == this.addOn[2]){
      console.log(this.aPrice[2]);

      this.paymentE = this.paymentE + this.aPrice[2];

      this.total =  this.payment + this.paymentE;
    }
    if(this.radioB == this.addOn[3]){
      console.log(this.aPrice[3]);

      this.paymentE = this.paymentE + this.aPrice[3];

      this.total =  this.payment + this.paymentE;
    }
  }

 Pic(){
   this.router.navigateByUrl('confirm');
 }
}
