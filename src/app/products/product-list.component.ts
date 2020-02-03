import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products', // you can use the selector as a directive in other component templates
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() {
    this.filteredProducts = this.products;
    // this.listFilter = 'cart';
  }

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
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    }
  ];
  ngOnInit(): void {
    console.log('in OnInit')
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