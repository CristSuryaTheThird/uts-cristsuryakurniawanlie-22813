import { Component, OnInit } from "@angular/core";
import { Product } from "../../products/product.model";
import { ProductsService } from "../../products/products.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.page.html",
  styleUrls: ["./edit.page.scss"],
})
export class EditPage implements OnInit {
  product: Product;
  foto: string;
  newProduct: Product;
  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("productId")) {
        return;
      }
      const productId = paramMap.get("productId");
      this.product = this.productService.getProduct(productId);
    });
  }

  editProduct(form: NgForm) {
    const id = this.product.id;
    const jenis = this.product.jenis;
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
        id: id,
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
        id: id,
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
        id: id,
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
        id: id,
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
    console.log(id);
    console.log(jenis);
    this.productService.editProduct(this.newProduct);
    this.router.navigate(["/admin"]);
  }

  async parseEdit(form: NgForm) {
    const alert = await this.alertController.create({
      header: "Are you sure?",
      message: "Do you really want to edit this product?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Edit",
          handler: () => this.editProduct(form),
        },
      ],
    });
    await alert.present();
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.parseEdit(form);
  }
}
