import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-feminine',
  templateUrl: './modal-feminine.component.html',
  styleUrl: './modal-feminine.component.scss'
})
export class ModalFeminineComponent implements AfterViewInit {
  @Input() mouseEnterCategory!: (category: string) => void;
  @Input() mouseLeaveCategory!: () => void;

  @Input() getContainerModalFeminine!: (container: HTMLDivElement) => void;

  @ViewChild('containerModalFeminine') containerModalFeminine!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.getContainerModalFeminine(this.containerModalFeminine.nativeElement);
  }
}
