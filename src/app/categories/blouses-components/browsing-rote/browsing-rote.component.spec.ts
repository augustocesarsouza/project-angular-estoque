import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsingRoteComponent } from './browsing-rote.component';

describe('BrowsingRoteComponent', () => {
  let component: BrowsingRoteComponent;
  let fixture: ComponentFixture<BrowsingRoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowsingRoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsingRoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render spans', () => {
    const spans = fixture.nativeElement.querySelectorAll('.browsing-rote > span');

    expect(spans[0].textContent.trim()).toBe("Página Inicial");
    expect(spans[1].textContent.trim()).toBe("Feminino");
    expect(spans[2].textContent.trim()).toBe("Roupas");
    expect(spans[3].textContent.trim()).toBe("Blusa");
  });

  it('should render header blouse headline', () => {
    const header = fixture.nativeElement.querySelector('.container-main-blouse-headline > h1');
    expect(header.textContent.trim()).toBe("BLUSA");
  });

  it('should render span blouse headline', () => {
    const span = fixture.nativeElement.querySelector('.container-main-blouse-headline > span');
    expect(span.textContent.trim()).toBe("feminino.roupas.blusa");
  });
});
