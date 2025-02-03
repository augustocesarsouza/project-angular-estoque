import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-branch',
  templateUrl: './modal-branch.component.html',
  styleUrl: './modal-branch.component.scss'
})
export class ModalBranchComponent implements AfterViewInit {
  @Input() mouseEnterCategory!: (category: string) => void;
  @Input() mouseLeaveCategory!: () => void;

  @Input() getContainerModalBranch!: (container: HTMLDivElement) => void;

  @ViewChild('containerModalBranch') containerModalBranch!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.getContainerModalBranch(this.containerModalBranch.nativeElement);
  }
}
