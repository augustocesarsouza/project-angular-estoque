import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeYourCepComponent } from './type-your-cep.component';

describe('TypeYourCepComponent', () => {
  let component: TypeYourCepComponent;
  let fixture: ComponentFixture<TypeYourCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeYourCepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeYourCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span shipping options', () => {
    const span = fixture.nativeElement.querySelector('.container-type-your-cep > span');
    expect(span.textContent.trim()).toBe(`Opções de frete ou retirada na loja:`);
  });

  it('should render input cep', () => {
    const input = fixture.nativeElement.querySelector('#input-cep');
    expect(input).not.toBeNull();
  });

  it('should render svg loupe', () => {
    const svg = fixture.nativeElement.querySelector('.container-input-cep-and-loupe > svg');
    expect(svg).not.toBeNull();
  });
});
