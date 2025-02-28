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
});
