import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-restaurant',
  templateUrl: './select-restaurant.component.html',
  styleUrls: ['./select-restaurant.component.css']
})
export class SelectRestaurantComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  
  onClickAddRes(){
    this.route.navigate(['/add-restaurant'])
  }

}
