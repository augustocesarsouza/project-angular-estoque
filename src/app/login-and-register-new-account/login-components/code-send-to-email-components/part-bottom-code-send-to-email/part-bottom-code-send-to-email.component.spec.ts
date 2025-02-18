import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartBottomCodeSendToEmailComponent } from './part-bottom-code-send-to-email.component';

describe('PartBottomCodeSendToEmailComponent', () => {
  let component: PartBottomCodeSendToEmailComponent;
  let fixture: ComponentFixture<PartBottomCodeSendToEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartBottomCodeSendToEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartBottomCodeSendToEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render container-split', () => {
    fixture.detectChanges();

    const container = fixture.nativeElement.querySelector('.container-split');
    expect(container).not.toBeNull();
  });

  it('should render container-split', () => {
    const secondsPass = 3;
    component.codeFoundSuccessfully = true;
    component.secondsPass = secondsPass;
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.container-code-correct > span');
    expect(span.textContent.trim()).toBe(`Codigo Correto ${secondsPass}s`);
  });

  it('should render all spans receive the code', () => {
    fixture.detectChanges();

    const spans = fixture.nativeElement.querySelectorAll('.container-did-not-receive-the-code > span');
    expect(spans[0].textContent.trim()).toBe(`Não recebeu o código?`);
    expect(spans[1].textContent.trim()).toBe(`Reenviar ou tente Outros métodos`);
  });

  it('should render button next', () => {
    fixture.detectChanges();

    const buttonNext = fixture.nativeElement.querySelector('.button-next');
    expect(buttonNext.textContent.trim()).toBe(`PRÓXIMO`);
  });
});
