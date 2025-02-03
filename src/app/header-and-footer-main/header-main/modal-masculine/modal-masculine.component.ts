import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-masculine',
  templateUrl: './modal-masculine.component.html',
  styleUrl: './modal-masculine.component.scss'
})
export class ModalMasculineComponent implements AfterViewInit {
  @Input() mouseEnterCategory!: (category: string) => void;
  @Input() mouseLeaveCategory!: () => void;

  @Input() getContainerModalMasculine!: (container: HTMLDivElement) => void;

  @ViewChild('containerModalMasculine') containerModalMasculine!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.getContainerModalMasculine(this.containerModalMasculine.nativeElement);
  }
}
