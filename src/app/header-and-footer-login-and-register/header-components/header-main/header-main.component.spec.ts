import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMainComponent } from './header-main.component';

describe('HeaderMainComponent', () => {
  let component: HeaderMainComponent;
  let fixture: ComponentFixture<HeaderMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header text', () => {
    const header = fixture.nativeElement.querySelector('.h1-header-text');
    expect(header.textContent.trim()).toBe("IDENTIFICAÇÃO");
  });

  it('should render logo estoque', () => {
    const logoEstoque = fixture.nativeElement.querySelector('.container-logo-estoque');
    expect(logoEstoque).not.toBeNull();
  });

  it('should render span help', () => {
    const span = fixture.nativeElement.querySelector('.container-help-and-site-security > span');
    expect(span.textContent.trim()).toBe("Ajuda");
  });

  it('should render icon help', () => {
    const icon = fixture.nativeElement.querySelector('.container-help-and-site-security > i');
    expect(icon).not.toBeNull();
  });
});
