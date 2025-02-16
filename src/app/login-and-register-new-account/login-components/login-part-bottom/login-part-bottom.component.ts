import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-part-bottom',
  templateUrl: './login-part-bottom.component.html',
  styleUrl: './login-part-bottom.component.scss'
})
export class LoginPartBottomComponent {
  @Input() onClickEnterInput!: () => void;
  @Input() onClickLoginWithGoogle!: () => void;
  @Input() onClickLogout!: () => void;
}
