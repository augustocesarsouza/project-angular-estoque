import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.scss'
})
export class HeaderMainComponent {
  @Input() header = "IDENTIFICAÇÃO";

  constructor(private router: Router){}

  onClickLogoEstoque(){
    this.router.navigate(['/']);
  }
}
