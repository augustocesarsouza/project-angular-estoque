import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TypesToChooseComponent } from '../types-to-choose/types-to-choose.component';

interface colorsAllProps {
  color: string;
  spanText: string;
  quantity: string;
  indexApp: string;
}

interface priceAndBrandAllProps {
  spanText: string;
  quantity: string;
  indexApp: string;
}

@Component({
  selector: 'app-category-filter-main',
  templateUrl: './category-filter-main.component.html',
  styleUrl: './category-filter-main.component.scss'
})
export class CategoryFilterMainComponent implements OnInit {
  @ViewChild('containerFloatingColor') containerFloatingColor!: ElementRef<HTMLDivElement>;
  @ViewChild('containerFloatingPriceRange') containerFloatingPriceRange!: ElementRef<HTMLDivElement>;
  @ViewChild('containerFloatingBrand') containerFloatingBrand!: ElementRef<HTMLDivElement>;
  @ViewChild('containerFloatingSize') containerFloatingSize!: ElementRef<HTMLDivElement>;

  @ViewChild('appTypesToColor') appTypesToColor!: TypesToChooseComponent;
  @ViewChild('appTypesToPriceRange') appTypesToPriceRange!: TypesToChooseComponent;
  @ViewChild('appTypesToBrand') appTypesToBrand!: TypesToChooseComponent;
  @ViewChild('appTypesToSize') appTypesToSize!: TypesToChooseComponent;

  colorsAll: colorsAllProps[] = [];
  priceAll: priceAndBrandAllProps[] = [];
  brandAll: priceAndBrandAllProps[] = [];
  sizeAll: priceAndBrandAllProps[] = [];

  ngOnInit(): void {
    this.onClickColorPriceRangeBrandSize = this.onClickColorPriceRangeBrandSize.bind(this);

    this.funcionColors();
    this.funcionPrices();
    this.funcionBrands();
    this.funcionSizes();
  }

  onClickColorPriceRangeBrandSize(svg: HTMLElement, container: HTMLDivElement, whichClicked: string) {
    if(svg.style.transform === "rotate(180deg)"){
      svg.style.transform = "rotate(0deg)";
      container.style.border = "1.5px solid #ffffff";
    }else {
      svg.style.transform = "rotate(180deg)";

      container.style.border = "1.5px solid #ddd";
      container.style.borderBottom = "1.5px solid rgba(221, 221, 221, 0)";
    }

    if(whichClicked === 'color'){
      if(this.containerFloatingColor.nativeElement.style.display === "flex"){
        this.containerFloatingColor.nativeElement.style.display = "none";
      }else {
        this.containerFloatingColor.nativeElement.style.display = "flex";
      }
    }else if(whichClicked === 'price-range'){
      if(this.containerFloatingPriceRange.nativeElement.style.display === "flex"){
        this.containerFloatingPriceRange.nativeElement.style.display = "none";

        this.appTypesToPriceRange.setZIndex("35");
      }else {
        this.containerFloatingPriceRange.nativeElement.style.display = "flex";

        this.appTypesToPriceRange.setZIndex("45");
      }
    }else if(whichClicked === 'brand'){
      if(this.containerFloatingBrand.nativeElement.style.display === "flex"){
        this.containerFloatingBrand.nativeElement.style.display = "none";

        this.appTypesToBrand.setZIndex("35");
      }else {
        this.containerFloatingBrand.nativeElement.style.display = "flex";

        this.appTypesToBrand.setZIndex("45");
      }
    }else if(whichClicked === 'size'){
      if(this.containerFloatingSize.nativeElement.style.display === "flex"){
        this.containerFloatingSize.nativeElement.style.display = "none";

        this.appTypesToSize.setZIndex("35");
      }else {
        this.containerFloatingSize.nativeElement.style.display = "flex";

        this.appTypesToSize.setZIndex("60");
      }
    }
  }

  funcionColors () {
    const obj1 = {color: "#ffff00", spanText: "AMARELO", quantity: "5", indexApp: "0"};
    const obj2 = {color: "#1a1aff", spanText: "AZUL", quantity: "13", indexApp: "0"};
    const obj3 = {color: "#000e52", spanText: "AZUL MARINHO", quantity: "10", indexApp: "0"};
    const obj4 = {color: "#e6d6c6", spanText: "BEGE", quantity: "26", indexApp: "0"};
    const obj5 = {color: "#e6d6c6", spanText: "BEGE", quantity: "26", indexApp: "0"};
    const obj6 = {color: "#f2f2f2", spanText: "BICOLOR", quantity: "4", indexApp: "0"};
    const obj7 = {color: "#ffffff", spanText: "BRANCO", quantity: "13", indexApp: "0"};
    const obj8 = {color: "#cd7f32", spanText: "BRONZE", quantity: "1", indexApp: "0"};
    const obj9 = {color: "#d9d9d9", spanText: "CINZA", quantity: "5", indexApp: "0"};
    const obj10 = {color: "#e6ac00", spanText: "DOURADO", quantity: "8", indexApp: "0"};
    const obj11 = {color: "#f2f2f2", spanText: "ESTAMPADO", quantity: "22", indexApp: "0"};
    const obj12 = {color: "#ff6600", spanText: "LARANJA", quantity: "12", indexApp: "0"};
    const obj13 = {color: "#f2f2f2", spanText: "LISTRAS", quantity: "7", indexApp: "0"};
    const obj14 = {color: "#996633", spanText: "MARROM", quantity: "3", indexApp: "0"};
    const obj15 = {color: "#F9F9F9", spanText: "OFF WHITE", quantity: "35", indexApp: "0"};
    const obj16 = {color: "#cccccc", spanText: "PRATA", quantity: "10", indexApp: "0"};
    const obj17 = {color: "#000000", spanText: "PRETO", quantity: "107", indexApp: "0"};
    const obj18 = {color: "#ff66cc", spanText: "ROSA", quantity: "37", indexApp: "0"};
    const obj19 = {color: "#9900cc", spanText: "ROXO", quantity: "10", indexApp: "0"};
    const obj20 = {color: "#009933", spanText: "VERDE", quantity: "44", indexApp: "0"};
    const obj21 = {color: "#FF1A1A", spanText: "VERMELHO", quantity: "20", indexApp: "0"};
    const obj22 = {color: "#660033", spanText: "VINHO", quantity: "7", indexApp: "1"};
    this.colorsAll.push(obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20, obj21, obj22);
  }

  funcionPrices () {
    const obj1 = {spanText: "R$ 0 a R$ 100", quantity: "6", indexApp: "0"};
    const obj2 = {spanText: "R$ 100 a R$ 200", quantity: "140", indexApp: "0"};
    const obj3 = {spanText: "R$ 200 a R$ 300", quantity: "150", indexApp: "0"};
    const obj4 = {spanText: "R$ 300 a R$ 400", quantity: "77", indexApp: "0"};
    const obj5 = {spanText: "R$ 400 a R$ 500", quantity: "31", indexApp: "0"};
    const obj6 = {spanText: "R$ 500 a R$ 600", quantity: "14", indexApp: "0"};
    const obj7 = {spanText: "R$ 600 a R$ 700", quantity: "3", indexApp: "0"};
    const obj8 = {spanText: "R$ 700 a R$ 100000", quantity: "2", indexApp: "1"};
    this.priceAll.push(obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8);
  }

  funcionBrands () {
    const obj1 = {spanText: "LE LIS BLANC DEUX", quantity: "248", indexApp: "0"};
    const obj2 = {spanText: "DUDALINA FEM", quantity: "71", indexApp: "0"};
    const obj3 = {spanText: "JOHN JOHN FEM", quantity: "61", indexApp: "0"};
    const obj4 = {spanText: "BOBÔ", quantity: "43", indexApp: "1"};
    this.brandAll.push(obj1, obj2, obj3, obj4);
  }

  funcionSizes () {
    const obj1 = {spanText: "PP", quantity: "131", indexApp: "0"};
    const obj2 = {spanText: "P", quantity: "186", indexApp: "0"};
    const obj3 = {spanText: "M", quantity: "150", indexApp: "0"};
    const obj4 = {spanText: "G", quantity: "152", indexApp: "0"};
    const obj5 = {spanText: "GG", quantity: "53", indexApp: "0"};
    const obj6 = {spanText: "34", quantity: "25", indexApp: "0"};
    const obj7 = {spanText: "36", quantity: "80", indexApp: "0"};
    const obj8 = {spanText: "38", quantity: "73", indexApp: "0"};
    const obj9 = {spanText: "40", quantity: "69", indexApp: "0"};
    const obj10 = {spanText: "42", quantity: "68", indexApp: "0"};
    const obj11 = {spanText: "44", quantity: "67", indexApp: "0"};
    const obj12 = {spanText: "46", quantity: "30", indexApp: "0"};
    const obj13 = {spanText: "48", quantity: "1", indexApp: "0"};
    const obj14 = {spanText: "50", quantity: "1", indexApp: "1"};
    this.sizeAll.push(obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14);
  }
}
