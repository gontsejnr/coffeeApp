import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.page.html',
  styleUrls: ['./coffee.page.scss'],
})
export class CoffeePage implements OnInit {

  @ViewChild('slides') slides: any;

  constructor() { }

  ngOnInit() {
  }

  nextSlide(){
    this.slides.slideNext();
}

}
