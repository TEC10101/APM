import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  // selector: 'pm-products', // you can use the selector as a directive in other component templates
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  // private _productSvc: ProductService;
  pageTitle: string = 'Product List';
  clickedItem: string = '';
  
  imageWidth: number = 50;
  imageMargin: number = 2;
  isShowingImages: boolean = false;
  private _listFilter: string = ''; //store last entered filter from user
  get listFilter(): string { return this._listFilter; }
  set listFilter(value: string) { 
    this._listFilter = value 
    this.filteredProducts = this.listFilter ? this.performListFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[];
  errorMessage: string;
  // ---------methods ------------------------------
  constructor(private _productSvc: ProductService) {
    // this._productSvc = productSvc
  }
  ngOnInit(): void {
    // this.products = this._productService.getProducts()
    this._productSvc.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    })
  }
  onShowImageClick(): void{
    this.isShowingImages = !this.isShowingImages;
  }
  performListFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  onRatingClicked(message: string): void {
    this.clickedItem = message;
  }
}