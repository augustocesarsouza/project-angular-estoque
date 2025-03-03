import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrl: './sizes.component.scss'
})
export class SizesComponent {
  @Input() sizes!: string[];
  whichSizeChosen = 0;

  onClickContainerSize(sizeIndex: number){
    this.whichSizeChosen = sizeIndex;
  }
}
