import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  showDiv = {
    dm : false,
    de : false,
    st : false,
    dv: true
  }

  constructor() { }

  customOption:OwlOptions = 
  {
    loop:true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    navSpeed:true,
    margin:15,
    responsive:{
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav:true
  }

  ngOnInit(): void {
  }

}
