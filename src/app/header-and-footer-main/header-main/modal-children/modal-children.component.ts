import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-children',
  templateUrl: './modal-children.component.html',
  styleUrl: './modal-children.component.scss'
})
export class ModalChildrenComponent implements AfterViewInit {
  @Input() mouseEnterCategory!: (category: string) => void;
  @Input() mouseLeaveCategory!: () => void;

  @Input() getContainerModalChildren!: (container: HTMLDivElement) => void;

  @ViewChild('containerModalChildren') containerModalChildren!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.getContainerModalChildren(this.containerModalChildren.nativeElement);
  }
}
