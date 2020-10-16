import { Injectable } from "@angular/core";
import { Product } from "./product.model";
@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private divType: number = 1;
  private products: Product[] = [
    {
      id: "P1",
      jenis: "CPU",
      nama: "Stryker Ultimate 45",
      merek: "Fox",
      foto: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Cpu.jpg",
      model: "Aquors360",
      harga: 5000000,
      stok: 100,
      detailCPU: {
        baseClock: 2,
        boostClock: 3,
        core: 4,
        thread: 8,
      },
      detailRam: {},
      detailMB: {},
    },
    {
      id: "P2",
      jenis: "CPU",
      nama: "Stryker Omega 54",
      foto: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Cpu.jpg",
      model: "Aquors420",
      merek: "Cat",
      harga: 8000000,
      stok: 25,
      detailCPU: {
        baseClock: 2.5,
        boostClock: 3.5,
        core: 4,
        thread: 8,
      },
      detailRam: {},
      detailMB: {},
    },
    {
      id: "P3",
      jenis: "CPU",
      nama: "Stryker Alpha 21",
      merek: "Shirakami",
      foto: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Cpu.jpg",
      model: "Aquors01",
      harga: 10000000,
      stok: 50,
      detailCPU: {
        baseClock: 3,
        boostClock: 4,
        core: 8,
        thread: 16,
      },
      detailRam: {},
      detailMB: {},
    },
    {
      id: "P4",
      jenis: "CPU",
      nama: "Stryker Emperor 99",
      merek: "Fubuki",
      foto: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Cpu.jpg",
      model: "Aquors999",
      harga: 15000000,
      stok: 10,
      detailCPU: {
        baseClock: 4,
        boostClock: 5,
        core: 16,
        thread: 32,
      },
      detailRam: {},
      detailMB: {},
    },
    {
      id: "P5",
      jenis: "RAM",
      nama: "Ramulan Ultimatum 5",
      merek: "Oni",
      foto: "https://upload.wikimedia.org/wikipedia/commons/d/d3/RAM_n.jpg",
      model: "Firaga360",
      harga: 2000000,
      stok: 50,
      detailCPU: {},
      detailRam: {
        speed: 2400,
        size: 8,
      },
      detailMB: {},
    },
    {
      id: "P6",
      jenis: "RAM",
      nama: "Ramulan Desperado 15",
      merek: "Trio",
      foto: "https://upload.wikimedia.org/wikipedia/commons/d/d3/RAM_n.jpg",
      model: "Firaga000",
      harga: 2500000,
      stok: 10,
      detailCPU: {},
      detailRam: {
        speed: 3200,
        size: 16,
      },
      detailMB: {},
    },
    {
      id: "P7",
      jenis: "RAM",
      nama: "Ramulan Hoshinova 8",
      merek: "Nekomata",
      foto: "https://upload.wikimedia.org/wikipedia/commons/d/d3/RAM_n.jpg",
      model: "Firaga720",
      harga: 4000000,
      stok: 5,
      detailCPU: {},
      detailRam: {
        speed: 2600,
        size: 8,
      },
      detailMB: {},
    },
    {
      id: "P8",
      jenis: "MB",
      nama: "Mother Nature 36",
      merek: "Okayu",
      foto:
        "https://upload.wikimedia.org/wikipedia/commons/a/a2/2007Intel45nmProcessorLaunchInTaiwan_MSI_X38DiamondCombo.jpg",
      model: "Thundaga360",
      harga: 10000000,
      stok: 10,
      detailCPU: {},
      detailRam: {},
      detailMB: {
        chipset: "Type A",
        target: "CPU Model GroundZero",
      },
    },
    {
      id: "P9",
      jenis: "MB",
      nama: "Mother Calling 63",
      merek: "Nakiri",
      foto:
        "https://upload.wikimedia.org/wikipedia/commons/a/a2/2007Intel45nmProcessorLaunchInTaiwan_MSI_X38DiamondCombo.jpg",
      model: "Thundaga60",
      harga: 8000000,
      stok: 30,
      detailCPU: {},
      detailRam: {},
      detailMB: {
        chipset: "Type A",
        target: "CPU Model Gladiator",
      },
    },
    {
      id: "P10",
      jenis: "GPU",
      nama: "Goliath Phantom 1000",
      merek: "Ayame",
      foto:
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/Gpu-connections.png",
      model: "Blizzaga360",
      harga: 8000000,
      stok: 10,
      detailCPU: {},
      detailRam: {},
      detailMB: {},
    },
  ];
  constructor() {}
  getAllProduct() {
    return [...this.products];
  }

  getProduct(productId: string) {
    return {
      ...this.products.find((product) => {
        return product.id === productId;
      }),
    };
  }
  getDivType() {
    return this.divType;
  }
  changeDivType(newDivType: number) {
    this.divType = newDivType;
    return this.divType;
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  editProduct(editedProduct: Product) {
    this.products = this.products.map((item) => {
      if (item.id == editedProduct.id) {
        return editedProduct;
      } else {
        return item;
      }
    });
  }

  deleteProduct(productId: string) {
    this.products = this.products.filter((product) => {
      return product.id !== productId;
    });
  }
}
