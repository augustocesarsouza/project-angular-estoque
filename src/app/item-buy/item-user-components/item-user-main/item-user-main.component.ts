import { ChangeDetectorRef, Component, ElementRef, Input, QueryList, OnInit } from '@angular/core';
import { Item } from '../../../interface-entity/item';

@Component({
  selector: 'app-item-user-main',
  templateUrl: './item-user-main.component.html',
  styleUrl: './item-user-main.component.scss'
})
export class ItemUserMainComponent implements OnInit {
  @Input() item!: Item;

  imgProductAll!: string[];
  whichImgShowUser!: string;
  whichIndexImgIs = 0;
  colorsItem = ["black", "red"];
  sizes!: string[];

  containerImgHighlight!: QueryList<ElementRef<HTMLDivElement>>;

  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.updateValueWhichIndexImgIs = this.updateValueWhichIndexImgIs.bind(this);
    this.updateValueWhichImgShowUser = this.updateValueWhichImgShowUser.bind(this);
    this.getValueContainerImgHighlight = this.getValueContainerImgHighlight.bind(this);

    this.imgProductAll = this.item.imgProductAll;

    this.whichImgShowUser = this.imgProductAll[0];
    this.getSizeItem(this.item);
  }

  updateValueWhichIndexImgIs(value: number){
    this.whichIndexImgIs = value;
  }

  updateValueWhichImgShowUser(value: string){
    this.whichImgShowUser = value;
  }

  getValueContainerImgHighlight(value: QueryList<ElementRef<HTMLDivElement>>){
    this.containerImgHighlight = value;
    this.cdr.detectChanges();
  }

  getSizeItem (data: Item) {
    const sizes = data.size.split(",");
    this.sizes = sizes;
  }
}
