import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Product } from "../../products/product.model";
import { ProductsService } from "../../products/products.service";
@Component({
  selector: "app-create",
  templateUrl: "./create.page.html",
  styleUrls: ["./create.page.scss"],
})
export class CreatePage implements OnInit {
  allProduct: Product[];
  foto: string;
  newProduct: Product;
  constructor(
    private router: Router,
    private productService: ProductsService
  ) {}
  ngOnInit() {}
  ionViewWillEnter() {
    this.allProduct = this.productService.getAllProduct();
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const id =
      parseInt(this.allProduct[this.allProduct.length - 1].id.substring(1)) + 1;
    const jenis = form.value.jenis;
    const nama = form.value.nama;
    const merek = form.value.merek;
    if (form.value.foto.replace(/\s/g, "") == "") {
      this.foto =
        "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png";
    } else {
      this.foto = form.value.foto;
    }
    const model = form.value.model;
    const harga = form.value.harga;
    const stok = form.value.stok;

    if (jenis == "CPU") {
      const baseClock = form.value.baseClock;
      const boostClock = form.value.boostClock;
      const core = form.value.core;
      const thread = form.value.thread;
      this.newProduct = {
        id: `P${id}`,
        jenis: jenis,
        nama: nama,
        merek: merek,
        foto: this.foto,
        model: model,
        harga: harga,
        stok: stok,
        detailCPU: {
          baseClock: baseClock,
          boostClock: boostClock,
          core: core,
          thread: thread,
        },
        detailRam: {},
        detailMB: {},
      };
    } else if (jenis == "RAM") {
      const speed = form.value.speed;
      const size = form.value.size;
      this.newProduct = {
        id: `P${id}`,
        jenis: jenis,
        nama: nama,
        merek: merek,
        foto: this.foto,
        model: model,
        harga: harga,
        stok: stok,
        detailCPU: {},
        detailRam: { speed: speed, size: size },
        detailMB: {},
      };
    } else if (jenis == "MB") {
      const chipset = form.value.chipset;
      const target = form.value.target;
      this.newProduct = {
        id: `P${id}`,
        jenis: jenis,
        nama: nama,
        merek: merek,
        foto: this.foto,
        model: model,
        harga: harga,
        stok: stok,
        detailCPU: {},
        detailRam: {},
        detailMB: { chipset: chipset, target: target },
      };
    } else if (jenis == "GPU") {
      this.newProduct = {
        id: `P${id}`,
        jenis: jenis,
        nama: nama,
        merek: merek,
        foto: this.foto,
        model: model,
        harga: harga,
        stok: stok,
        detailCPU: {},
        detailRam: {},
        detailMB: {},
      };
    }

    this.productService.addProduct(this.newProduct);
    this.router.navigate(["/admin"]);
  }
}
