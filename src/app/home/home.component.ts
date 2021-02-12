import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.hero-next',
      prevEl: '.hero-prev'
    },
    spaceBetween: 30,
    loop: true
  };

  
  countDownDate = new Date("April 13, 2021 12:00:00").getTime();
  range : any;
  visible: boolean= false;

  x= setInterval(()=>{
    var now = new Date().getTime();
    var distance = this.countDownDate-now;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)/(1000*60)));
    var seconds = Math.floor((distance % (1000*60))/1000);
    this.range = days+"d "+hours+"h "+minutes+"m "+seconds+"s ";

    if(distance<0){
      clearInterval(this.x);
      this.visible= true;
    }
  });
}