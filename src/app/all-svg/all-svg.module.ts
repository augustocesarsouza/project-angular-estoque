import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgExitComponent } from './svg-exit/svg-exit.component';
import { SvgMicrophoneComponent } from './svg-microphone/svg-microphone.component';
import { SvgLoupeComponent } from './svg-loupe/svg-loupe.component';
import { SvgEyeOpenComponent } from './svg-eye-open/svg-eye-open.component';
import { SvgEyeCloseComponent } from './svg-eye-close/svg-eye-close.component';
import { SvgArrowRegisterComponent } from './svg-arrow-register/svg-arrow-register.component';
import { CodeIsWrongXComponent } from './code-is-wrong-x/code-is-wrong-x.component';
import { SvgGoogleComponent } from './svg-google/svg-google.component';
import { SvgMoreComponent } from './svg-more/svg-more.component';
import { AppSvgAddressComponent } from './app-svg-address/app-svg-address.component';

@NgModule({
  declarations: [SvgExitComponent, SvgMicrophoneComponent, SvgLoupeComponent, SvgEyeOpenComponent, SvgEyeCloseComponent, SvgArrowRegisterComponent, CodeIsWrongXComponent, SvgGoogleComponent, SvgMoreComponent, AppSvgAddressComponent],
  exports: [SvgExitComponent, SvgMicrophoneComponent, SvgLoupeComponent, SvgEyeOpenComponent, SvgEyeCloseComponent, SvgArrowRegisterComponent, CodeIsWrongXComponent, SvgGoogleComponent,
    SvgMoreComponent, AppSvgAddressComponent
  ],
  imports: [CommonModule],
})
export class AllSvgModule {}
