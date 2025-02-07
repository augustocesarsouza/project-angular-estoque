import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountFirstPartComponent } from './my-account-first-part.component';

describe('MyAccountFirstPartComponent', () => {
  let component: MyAccountFirstPartComponent;
  let fixture: ComponentFixture<MyAccountFirstPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyAccountFirstPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccountFirstPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render icon body user', () => {
    const icon = fixture.nativeElement.querySelector('.container-svg-and-my-account > i');
    expect(icon).not.toBeNull();
  });

  it('should render span my account', () => {
    const span = fixture.nativeElement.querySelector('.container-svg-and-my-account > span');
    expect(span.textContent.trim()).toBe("Minha Conta");
  });

  it('should render all three spans info my account and yours values', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-info-about-my-account > span');
    expect(spans.length).toEqual(3);

    expect(spans[0].textContent.trim()).toBe("Dados pessoais");
    expect(spans[1].textContent.trim()).toBe("Alterar senha");
    expect(spans[2].textContent.trim()).toBe("Endereços");
  });
});
