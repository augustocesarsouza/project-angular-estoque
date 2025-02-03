import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-nav-category',
  templateUrl: './all-nav-category.component.html',
  styleUrl: './all-nav-category.component.scss'
})
export class AllNavCategoryComponent implements OnInit {
  // @ViewChild('containerModalFeminine') containerModalFeminine!: ElementRef<HTMLDivElement>;
  containerModalFeminine!: HTMLDivElement;
  // @ViewChild('containerModalMasculine') containerModalMasculine!: ElementRef<HTMLDivElement>;
  containerModalMasculine!: HTMLDivElement;
  // @ViewChild('containerModalNews') containerModalNews!: ElementRef<HTMLDivElement>;
  containerModalNews!: HTMLDivElement;
  // @ViewChild('containerModalChildren') containerModalChildren!: ElementRef<HTMLDivElement>;
  containerModalChildren!: HTMLDivElement;
  // @ViewChild('containerModalHome') containerModalHome!: ElementRef<HTMLDivElement>;
  containerModalHome!: HTMLDivElement;
  // @ViewChild('containerModalBranch') containerModalBranch!: ElementRef<HTMLDivElement>;
  containerModalBranch!: HTMLDivElement;
  whichCategoryMouseEnterOrLeave = "";

  ngOnInit(): void {
    this.mouseEnterCategory = this.mouseEnterCategory.bind(this);
    this.mouseLeaveCategory = this.mouseLeaveCategory.bind(this);
  }

  mouseEnterCategory(category: string){
    this.whichCategoryMouseEnterOrLeave = category;

    if(category === "news"){
      this.containerModalNews.style.display = 'flex';
    }

    if(category === "feminine"){
      this.containerModalFeminine.style.display = 'flex';
    }

    if(category === "masculine"){
      this.containerModalMasculine.style.display = 'flex';
    }

    if(category === "children"){
      this.containerModalChildren.style.display = 'flex';
    }

    if(category === "home"){
      this.containerModalHome.style.display = 'flex';
    }

    if(category === "branch"){
      this.containerModalBranch.style.display = 'flex';
    }
  }

  mouseLeaveCategory(){
    this.containerModalFeminine.style.display = 'none';
    this.containerModalMasculine.style.display = 'none';
    this.containerModalNews.style.display = 'none';
    this.containerModalChildren.style.display = 'none';
    this.containerModalHome.style.display = 'none';
    this.containerModalBranch.style.display = 'none';
    this.whichCategoryMouseEnterOrLeave = "";
  }

  getContainerModalNews = (container: HTMLDivElement) => {
    this.containerModalNews = container;
  }

  getContainerModalFeminine = (container: HTMLDivElement) => {
    this.containerModalFeminine = container;
  }

  getContainerModalMasculine = (container: HTMLDivElement) => {
    this.containerModalMasculine = container;
  }

  getContainerModalChildren = (container: HTMLDivElement) => {
    this.containerModalChildren = container;
  }

  getContainerModalHome = (container: HTMLDivElement) => {
    this.containerModalHome = container;
  }

  getContainerModalBranch = (container: HTMLDivElement) => {
    this.containerModalBranch = container;
  }
}


// FAZER A SEPARAÇÃO AMANHA COMPONENT FICAR MENOR
