import { Component } from '@angular/core';

@Component({
  selector: 'app-header-second',
  templateUrl: './header-second.component.html',
  styleUrl: './header-second.component.scss'
})
export class HeaderSecondComponent {

  onClickAccount(){
    console.log('Account clicked');
  }

  mouseEnterAccount(){
    console.log('mouseEnterAccount');
  }

  mouseLeaveAccount(){
    console.log('mouseLeaveAccount');
  }
}

// position: absolute; -- ISSO AQUI É DO CONTAINER FLUTUANDO Account
// left: -100px;
// top: 6px;
// min-height: 100px;
// width: 260px;
// padding: 25px 20px 20px;
// box-sizing: border-box;
// background: #fff;
// border: 1.5px solid #ddd;
// box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
// overflow: visible;
// z-index: 2;
// text-align: left;
