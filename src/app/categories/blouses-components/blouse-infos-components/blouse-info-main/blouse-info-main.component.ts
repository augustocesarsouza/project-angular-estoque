import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../../../interface-entity/item';

@Component({
  selector: 'app-blouse-info-main',
  templateUrl: './blouse-info-main.component.html',
  styleUrl: './blouse-info-main.component.scss'
})
export class BlouseInfoMainComponent implements OnInit {
  @Input() itemList!: Item[];
  whichClicked = "";

  @ViewChild('containerBlouseSecond') containerBlouseSecond!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.functionClickFirstColumnOrSecond = this.functionClickFirstColumnOrSecond.bind(this);
  }

  functionClickFirstColumnOrSecond (whichClicked: string) {
    this.whichClicked = whichClicked;
    if(whichClicked === "first"){
      this.containerBlouseSecond.nativeElement.style.gridTemplateColumns = "repeat(auto-fit, minmax(270px, 1fr))";
    }

    if(whichClicked === "second"){
      this.containerBlouseSecond.nativeElement.style.gridTemplateColumns = "repeat(auto-fit, minmax(240px, 1fr))";
    }
  }
}
