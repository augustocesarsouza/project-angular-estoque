import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../interface-entity/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browsing-rote',
  templateUrl: './browsing-rote.component.html',
  styleUrl: './browsing-rote.component.scss'
})
export class BrowsingRoteComponent implements OnInit {
  @Input() item!: Item;
  nameCategory!: string[];

  constructor(private router: Router){}

  ngOnInit(): void {
    const nameCategory = this.item.category.nameCategory.split(">");
    this.nameCategory = nameCategory;
  }

  onClickBrowsingRote(rote: string){
    if(rote === "PaginaInicial"){
      const roteUser = "/";
      this.router.navigate([roteUser]);
    }

    if(rote === "Feminino"){
      const roteUser = "feminino/";
      this.router.navigate([roteUser]);
    }

    if(rote === "Roupas"){
      const roteUser = "feminino/roupas";
      this.router.navigate([roteUser]);
    }

    if(rote === "Blusa"){
      const roteUser = "feminino/roupas/blusa";
      this.router.navigate([roteUser]);
    }
  }
}
