import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./products.service";
import { Product } from "./product.model";
@Component({
  selector: "app-products",
  templateUrl: "./products.page.html",
  styleUrls: ["./products.page.scss"],
})
export class ProductsPage implements OnInit {
  products: Product[];
  divType: number;
  constructor(private productService: ProductsService) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.products = this.productService.getAllProduct();
    this.divType = this.productService.getDivType();
  }
  changeDiv() {
    if (this.divType == 1) {
      this.divType = this.productService.changeDivType(2);
    } else {
      this.divType = this.productService.changeDivType(1);
    }
    console.log(this.divType);
  }
}
