import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  product:Product;
  constructor(private router: Router, private productservice: ProductserviceService) {
    this.product=new Product();
  }

  // getProducts() {
  //   console.log("on getProduct()");

  //   console.log(this.products);
  // }
  ngOnInit(): void {
    // console.log("on ngoninit");
    // this.router.events.subscribe(value => {
    //   this.getProducts();
    // });
    this.productservice.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  temp = false;
  buttons() {
    this.temp = true;
  }

  delete(pro: Product) {
    this.productservice.delete(pro)
      .subscribe(
        (products: Product[]) => {
          this.products=products;
        },
        error => console.log(error));
  }
  buttonDisable=false;
  editMode(pro: Product){
    pro.editCell=true;
    this.buttonDisable=true;
  }
  editData(pro:Product) {
    console.log("inside edit");
    this.productservice.update(pro)
      .subscribe(
        (products: Product[]) => {
          this.products=products;
        },
        error => console.log(error));
    pro.editCell=false;
    this.buttonDisable=false;
  }
}
