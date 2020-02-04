import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

import { IProduct } from './product';

@Component({
  // selector: 'pm-product-detail', // only needed if nested in another module
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id'); // use the snapshot approach only if you need the initial value of the parameter
    
    // code to retrieve the product info
    this.pageTitle += `: ${id}  (Demo Product Below)`;
    this.product =  {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    }
  }
  onBack(): void {
    this._router.navigate(['/products'])
  }
}
