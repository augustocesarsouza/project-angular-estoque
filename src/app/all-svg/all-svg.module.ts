import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgExitComponent } from './svg-exit/svg-exit.component';
import { SvgMicrophoneComponent } from './svg-microphone/svg-microphone.component';
import { SvgLoupeComponent } from './svg-loupe/svg-loupe.component';
import { SvgEyeOpenComponent } from './svg-eye-open/svg-eye-open.component';
import { SvgEyeCloseComponent } from './svg-eye-close/svg-eye-close.component';
import { SvgArrowRegisterComponent } from './svg-arrow-register/svg-arrow-register.component';
import { CodeIsWrongXComponent } from './code-is-wrong-x/code-is-wrong-x.component';

@NgModule({
  declarations: [SvgExitComponent, SvgMicrophoneComponent, SvgLoupeComponent, SvgEyeOpenComponent, SvgEyeCloseComponent, SvgArrowRegisterComponent, CodeIsWrongXComponent],
  exports: [SvgExitComponent, SvgMicrophoneComponent, SvgLoupeComponent, SvgEyeOpenComponent, SvgEyeCloseComponent, SvgArrowRegisterComponent, CodeIsWrongXComponent],
  imports: [CommonModule],
})
export class AllSvgModule {}
