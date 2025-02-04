import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrl: './modal-home.component.scss'
})
export class ModalHomeComponent implements AfterViewInit {
  @Input() mouseEnterCategory!: (category: string) => void;
  @Input() mouseLeaveCategory!: () => void;

  @Input() getContainerModalHome!: (container: HTMLDivElement) => void;

  @ViewChild('containerModalHome') containerModalHome!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.getContainerModalHome(this.containerModalHome.nativeElement);
  }
}
