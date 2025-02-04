import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgExitComponent } from './svg-exit/svg-exit.component';
import { SvgMicrophoneComponent } from './svg-microphone/svg-microphone.component';
import { SvgLoupeComponent } from './svg-loupe/svg-loupe.component';
import { SvgEyeOpenComponent } from './svg-eye-open/svg-eye-open.component';
import { SvgEyeCloseComponent } from './svg-eye-close/svg-eye-close.component';

@NgModule({
  declarations: [SvgExitComponent, SvgMicrophoneComponent, SvgLoupeComponent, SvgEyeOpenComponent, SvgEyeCloseComponent],
  exports: [SvgExitComponent, SvgMicrophoneComponent, SvgLoupeComponent, SvgEyeOpenComponent, SvgEyeCloseComponent],
  imports: [CommonModule],
})
export class AllSvgModule {}
