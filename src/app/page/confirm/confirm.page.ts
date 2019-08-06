import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  coffeeType : string [] = ['Brewed Coffee', 'Cappuccino', 'Green Tea Latte', 'Espresso', 'Hot Chocolate', 'Chai Tea Latte']
  prices : number [] = [22, 33, 20, 34, 33, 32, 43, 34, 40]
  addOn: string [] = ['Milk', 'Cream', 'Chocolate', 'Honey']

  paramText1;
  paramText2;
  paramText3;
  paramText4;
  paramText5;
  paramText6;

//start amount
bCoffee:number = 0;
cappu:number = 0;
greenTea:number = 0;
espresso:number = 0;
hChocolate:number = 0;
chaiTea:number = 0;

//total amount
totalBcoffee:number = 0;
totalCappu:number = 0;
totalGreenTea:number = 0;
totalEspresso:number = 0;
totalHchocolate:number = 0;
totalChaiTea:number = 0;

exBcoffee:number = 0;
exCappu:number = 0;
exGreenTea:number = 0;
exEspresso:number = 0;
exHchocolate:number = 0;
exChaiTea:number = 0;

p_Bcoffee:number  = this.totalBcoffee + this.exBcoffee;
p_Cappu:number  = this.totalCappu + this.exCappu;
p_GreenTea:number  = this.totalGreenTea + this.exGreenTea;
p_Espresso:number  = this.totalEspresso + this.exEspresso;
p_Hchocolate:number  = this.totalHchocolate + this.exHchocolate;
p_ChaiTea:number  = this.totalChaiTea + this.exChaiTea;


payAmount:number = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
 + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;

 //addOn
  cream:number = 0;
  milk:number = 0;
  cream5: number = 0;
  milk5: number = 0;
  milk4: number = 0;
  cream4: number = 0;
  milk3: number = 0;
  cream3: number = 0;
  milk2: number = 0;
  cream2: number = 0;
  milk1: number = 0;
  cream1: number = 0;

  unitp1;
  unitp2;
  unitp3;
  unitp4;
  unitp5;
  unitp6;
  
  constructor(private router:Router) { 
    }

  ngOnInit() {
  }

  minus1(){

  console.log(this.bCoffee -= 1)
  console.log(this.totalBcoffee -=22)

  if(this.bCoffee <= 0){
    this.bCoffee = 0;
}
if(this.totalBcoffee <= 0){
  this.totalBcoffee = 0;
}

this.p_Bcoffee = this.totalBcoffee + this.exBcoffee;
this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
+ this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;
  }
  add1(){
console.log(this.bCoffee += 1)
console.log(this.totalBcoffee +=22)

this.p_Bcoffee = this.totalBcoffee + this.exBcoffee;
this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
+ this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  } 

  minus1Cream(){
    console.log(this.cream -= 1)
    console.log(this.exBcoffee -=10)
  
    if(this.cream <= 0){
      this.cream = 0;
  }
  if(this.exBcoffee <= 0){
    this.exBcoffee = 0;
  }
  this.p_Bcoffee = this.totalBcoffee + this.exBcoffee;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
}
  add1Cream(){
    console.log(this.cream += 1)
    console.log(this.exBcoffee +=10)
    this.p_Bcoffee = this.totalBcoffee + this.exBcoffee;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
  }
  minus1Milk(){
    console.log(this.milk -= 1)
    console.log(this.exBcoffee -=5)
  
    if(this.milk <= 0){
      this.milk = 0;
  }
  if(this.exBcoffee <= 0){
    this.exBcoffee = 0;
  } this.p_Bcoffee = this.totalBcoffee + this.exBcoffee;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
}
  add1Milk(){
    console.log(this.milk += 1)
    console.log(this.exBcoffee +=5)
    this.p_Bcoffee = this.totalBcoffee + this.exBcoffee;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
  }
  //========================================================================
  minus2(){
    console.log(this.cappu -= 1)
    console.log(this.totalCappu -=33)
  
    if(this.cappu <= 0){
      this.cappu = 0;
  }
  if(this.totalCappu <= 0){
    this.totalCappu = 0;
  }
  this.p_Cappu = this.totalCappu + this.exCappu;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
}
  add2(){
    console.log(this.cappu += 1)
    console.log(this.totalCappu +=33)
    this.p_Cappu = this.totalCappu + this.exCappu;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
  } 

  minus2Cream(){
    console.log(this.cream1 -= 1)
    console.log(this.exCappu -=10)
  
    if(this.cream1 <= 0){
      this.cream1 = 0;
  }
  if(this.exCappu <= 0){
    this.exCappu = 0;
  }
  this.p_Cappu = this.totalCappu + this.exCappu;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
}
  add2Cream(){
    console.log(this.cream1 += 1)
    console.log(this.exCappu +=10)
    this.p_Cappu = this.totalCappu + this.exCappu;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
  }
  minus2Milk(){
    console.log(this.milk1 -= 1)
    console.log(this.exCappu -=5)
  
    if(this.milk1 <= 0){
      this.milk1 = 0;
  }
  if(this.exCappu <= 0){
    this.exCappu = 0;
  } this.p_Cappu = this.totalCappu + this.exCappu;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
}
  add2Milk(){
    console.log(this.milk1 += 1)
    console.log(this.exCappu +=5)
    this.p_Cappu = this.totalCappu + this.exCappu;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea; 
   }
//=========================================================================
  minus3(){
    console.log(this.greenTea -= 1)
    console.log(this.totalGreenTea -=20)
  
    if(this.greenTea <= 0){
      this.greenTea = 0;
  }
  if(this.totalGreenTea <= 0){
    this.totalGreenTea = 0;
  }
  this.p_GreenTea = this.totalGreenTea + this.exGreenTea;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea; 
}
  add3(){
    console.log(this.greenTea += 1)
    console.log(this.totalGreenTea +=20)
    this.p_GreenTea = this.totalGreenTea + this.exGreenTea;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea; 
  } 
  
  minus3Cream(){
    console.log(this.cream2 -= 1)
    console.log(this.exGreenTea -=10)
  
    if(this.cream2 <= 0){
      this.cream2 = 0;
  }
  if(this.exGreenTea <= 0){
    this.exGreenTea = 0;
  }
  this.p_GreenTea = this.totalGreenTea+ this.exGreenTea;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
}
  add3Cream(){
    console.log(this.cream2 += 1)
    console.log(this.exGreenTea +=10)
    this.p_GreenTea = this.totalGreenTea + this.exGreenTea;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
  }
  minus3Milk(){
    console.log(this.milk2 -= 1)
    console.log(this.exGreenTea -=5)
  
    if(this.milk2 <= 0){
      this.milk2 = 0;
  }
  if(this.exGreenTea <= 0){
    this.exGreenTea = 0;
  } this.p_GreenTea = this.totalGreenTea + this.exGreenTea;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
}
  add3Milk(){
    console.log(this.milk2 += 1)
    console.log(this.exGreenTea +=5)
    this.p_GreenTea = this.totalGreenTea + this.exGreenTea;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea; 
   }
    //====================================================================
  minus4(){
    console.log(this.espresso -= 1)
    console.log(this.totalEspresso -=34)
  
    if(this.espresso <= 0){
      this.espresso = 0;
  }
  if(this.totalEspresso <= 0){
    this.totalEspresso = 0;
  }
  this.p_Espresso = this.totalEspresso + this.exEspresso;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;
}
  add4(){
    console.log(this.espresso += 1)
    console.log(this.totalEspresso +=34)
    this.p_Espresso = this.totalEspresso + this.exEspresso;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;
  } 

  minus4Cream(){
    console.log(this.cream3 -= 1)
    console.log(this.exEspresso -=10)
  
    if(this.cream3 <= 0){
      this.cream3 = 0;
  }
  if(this.exEspresso <= 0){
    this.exEspresso = 0;
  }
  this.p_Espresso = this.totalEspresso + this.exEspresso;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea; 
 }
  add4Cream(){
    console.log(this.cream3 += 1)
    console.log(this.exEspresso +=10)
    this.p_Espresso = this.totalEspresso + this.exEspresso;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
  }
  minus4Milk(){
    console.log(this.milk3 -= 1)
    console.log(this.exEspresso -=5)
  
    if(this.milk3 <= 0){
      this.milk3 = 0;
  }
  if(this.exEspresso <= 0){
    this.exEspresso = 0;
  } this.p_Espresso = this.totalEspresso + this.exEspresso;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
}
  add4Milk(){
    console.log(this.milk3 += 1)
    console.log(this.exEspresso +=5)
    this.p_Espresso = this.totalEspresso + this.exEspresso;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;
    } 
//==========================================================================
  minus5(){
    console.log(this.hChocolate -= 1)
    console.log(this.totalHchocolate -=33)
  
    if(this.hChocolate <= 0){
      this.hChocolate = 0;
  }
  if(this.totalHchocolate <= 0){
    this.totalHchocolate = 0;
  }
  this.p_Hchocolate = this.totalHchocolate + this.exHchocolate;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea; 
}
  add5(){
    console.log(this.hChocolate += 1)
    console.log(this.totalHchocolate +=33)
    this.p_Hchocolate = this.totalHchocolate + this.exHchocolate;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea; 
  } 
  
  minus5Cream(){
    console.log(this.cream4 -= 1)
    console.log(this.exHchocolate -=10)
  
    if(this.cream4 <= 0){
      this.cream4 = 0;
  }
  if(this.exHchocolate <= 0){
    this.exHchocolate = 0;
  }
  this.p_Hchocolate = this.totalHchocolate + this.exHchocolate;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
}
  add5Cream(){
    console.log(this.cream4 += 1)
    console.log(this.exHchocolate +=10)
    this.p_Hchocolate = this.totalHchocolate + this.exHchocolate;
    this.payAmount = this.p_Hchocolate;
  }
  minus5Milk(){
    console.log(this.milk4 -= 1)
    console.log(this.exHchocolate -=5)
  
    if(this.milk4 <= 0){
      this.milk4 = 0;
  }
  if(this.exHchocolate <= 0){
    this.exHchocolate = 0;
  } this.p_Hchocolate = this.totalHchocolate + this.exHchocolate;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
}
  add5Milk(){
    console.log(this.milk4 += 1)
    console.log(this.exHchocolate +=5)
    this.p_Hchocolate = this.totalHchocolate + this.exHchocolate;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea; 
   }
//============================================================================
  minus6(){
    console.log(this.chaiTea -= 1)
    console.log(this.totalChaiTea -=32)
  
    if(this.chaiTea <= 0){
      this.chaiTea = 0;
  }
  if(this.totalChaiTea <= 0){
    this.totalChaiTea = 0;
  }
  this.p_ChaiTea = this.totalChaiTea + this.exChaiTea;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;
}

  add6(){
    console.log(this.chaiTea += 1)
    console.log(this.totalChaiTea +=32)
    this.p_ChaiTea = this.totalChaiTea + this.exChaiTea;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;
  } 
  
  minus6Cream(){
    console.log(this.cream5 -= 1)
    console.log(this.exChaiTea -=10)
  
    if(this.cream5 <= 0){
      this.cream5 = 0;
  }
  if(this.exChaiTea <= 0){
    this.exChaiTea = 0;
  }
  this.p_ChaiTea = this.totalChaiTea + this.exChaiTea;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
}
  add6Cream(){
    console.log(this.cream5 += 1)
    console.log(this.exChaiTea +=10)
    this.p_ChaiTea = this.totalChaiTea + this.exChaiTea;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
  }
  minus6Milk(){
    console.log(this.milk5 -= 1)
    console.log(this.exChaiTea -=5)
  
    if(this.milk5 <= 0){
      this.milk5 = 0;
  }
  if(this.exChaiTea <= 0){
    this.exChaiTea = 0;
  } this.p_ChaiTea = this.totalChaiTea + this.exChaiTea;
  this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
  + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea;  
}
  add6Milk(){
    console.log(this.milk5 += 1)
    console.log(this.exChaiTea +=5)
    this.p_ChaiTea = this.totalChaiTea + this.exChaiTea;
    this.payAmount = this.p_Bcoffee + this.p_Cappu + this.p_GreenTea
    + this.p_Espresso + this.p_Hchocolate + this.p_ChaiTea; 
   }
    Pay(){

      if(this.p_Bcoffee > 0){
        this.paramText1 =  "Brewed coffee"
        this.unitp1 = "R" +this.p_Bcoffee +".00"
      }
      if(this.p_Cappu > 0){
       this.paramText2 =  "Cappiccino"
       this.unitp2 = "R" +this.p_Cappu +".00"
     }
     if(this.p_GreenTea > 0){
       this.paramText3 =  " GreenTea"
       this.unitp3 = "R" +this.p_GreenTea +".00"
     }
     if(this.p_Espresso > 0){
       this.paramText4 =  "Expresso" 
       this.unitp4 = "R" + this.p_Espresso +".00"
     }
     if(this.p_Hchocolate > 0){
       this.paramText5 =  "Hot chocolate"
      this.unitp5= "R" + this.p_Hchocolate +".00"
     }
     if(this.p_ChaiTea > 0){
       this.paramText6 =  "ChaiTea" 
       this.unitp6 = "R" + this.p_ChaiTea +".00"
     }
     
      console.log(this.payAmount);
  
      this.router.navigate(['/payment'], { queryParams:{ payAmount:this.payAmount,paramText1:this.paramText1,paramText2:this.paramText2,
        paramText3:this.paramText3,paramText4:this.paramText4,paramText5:this.paramText5,paramText6:this.paramText6,  unitp1:this.unitp1,
        unitp2:this.unitp2,
        unitp3:this.unitp3,
        unitp4:this.unitp4,
        unitp5:this.unitp5,
        unitp6:this.unitp6} });
       
    }
}
