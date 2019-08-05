import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

     paramText1;
     paramText2;
     paramText3;
     paramText4;
     paramText5;
     paramText6;
   
     unitp1;
  unitp2;
  unitp3;
  unitp4;
  unitp5;
  unitp6;

  payAmount;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log(params);
      this.payAmount = params.payAmount;

      this.paramText1 = params.paramText1,
      this.paramText2 = params.paramText2,
      this.paramText3 = params.paramText3,
      this.paramText4 = params.paramText4,
      this.paramText5 = params.paramText5,
      this.paramText6 = params.paramText6,
       this.unitp1 = params.unitp1,
        this.unitp2 = params.unitp2,
        this.unitp3 = params.unitp3,
        this.unitp4 = params.unitp4,
        this.unitp5 = params.unitp5,
        this.unitp6 = params.unitp6;
      console.log(this.payAmount,this.paramText1,this.paramText2,this.paramText3,this.paramText4,this.paramText5,this.paramText6,this.unitp1,
        this.unitp2,
        this.unitp3,
        this.unitp4,
        this.unitp5,
        this.unitp6);
    });
   
  }


}
