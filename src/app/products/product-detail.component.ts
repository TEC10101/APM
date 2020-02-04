import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  // selector: 'pm-product-detail', // only needed if nested in another module
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id'); // use the snapshot approach only if you need the initial value of the parameter
    
    // code to retrieve the product info
  }

}
