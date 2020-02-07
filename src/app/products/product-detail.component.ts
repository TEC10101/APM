import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ProductService } from './product.service';

import { IProduct } from './product';

@Component({
  // selector: 'pm-product-detail', // only needed if nested in another module
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  // providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  // products: IProduct[];
  errorMessage: string;
  // private _productSvc: ProductService;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productSvc: ProductService) { 

              }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id'); // use the snapshot approach only if you need the initial value of the parameter
    
    this._productSvc.getProducts().subscribe({
      next: products => {
        // code to retrieve the product info
        this.pageTitle += `: ${id}`;
        this.product =  products.filter(x => x.productId === id).pop();
        // this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    })


    // this.product =  {
    //   "productId": 1,
    //   "productName": "Leaf Rake",
    //   "productCode": "GDN-0011",
    //   "releaseDate": "March 19, 2019",
    //   "description": "Leaf rake with 48-inch wooden handle.",
    //   "price": 19.95,
    //   "starRating": 3.2,
    //   "imageUrl": "assets/images/leaf_rake.png"
    // }
  }
  onBack(): void {
    this._router.navigate(['/products'])
  }
}
