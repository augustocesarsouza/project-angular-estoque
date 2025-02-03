import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-news',
  templateUrl: './modal-news.component.html',
  styleUrl: './modal-news.component.scss'
})
export class ModalNewsComponent implements AfterViewInit {
  @Input() mouseEnterCategory!: (category: string) => void;
  @Input() mouseLeaveCategory!: () => void;

  @Input() getContainerModalNews!: (container: HTMLDivElement) => void;

  @ViewChild('containerModalNews') containerModalNews!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.getContainerModalNews(this.containerModalNews.nativeElement);
  }
}
