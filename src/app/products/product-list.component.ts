import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products', // you can use the selector as a directive in other component templates
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  constructor(productService: ProductService) {
    this._productService = productService
  }
  private _productService: ProductService;
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
  ngOnInit(): void {
    this.products = this._productService.getProducts()
    this.filteredProducts = this.products;
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