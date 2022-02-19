import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-developement',
  templateUrl: './web-developement.component.html',
  styleUrls: ['./web-developement.component.css']
})
export class WebDevelopementComponent implements OnInit {

  @Input() public viewAll: boolean =true

  constructor() { }

  ngOnInit(): void {
  }

}
