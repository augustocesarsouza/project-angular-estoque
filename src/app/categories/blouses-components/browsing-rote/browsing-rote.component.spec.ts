import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { BrowsingRoteComponent } from './browsing-rote.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UpdateCurrentUrlCategoriesService } from '../../service/update-current-url-categories.service';
import { ItemService } from '../../../services-backend/item.service';

describe('BrowsingRoteComponent', () => {
  let component: BrowsingRoteComponent;
  let fixture: ComponentFixture<BrowsingRoteComponent>;
  let mockRouter: unknown;

  let mockUpdateCurrentUrlCategoriesService: unknown;
  let updateUrlSubject: Subject<string>;

  beforeEach(async () => {
    updateUrlSubject = new Subject<string>();

    mockUpdateCurrentUrlCategoriesService = {
      updateUrl$: updateUrlSubject.asObservable()
    };

    mockRouter = {
      url: '/feminino/roupas/blusa'
    };

    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [BrowsingRoteComponent],
      providers: [
        ChangeDetectorRef, ItemService,
        { provide: Router, useValue: mockRouter,},
        { provide: UpdateCurrentUrlCategoriesService, useValue: mockUpdateCurrentUrlCategoriesService }
      ]
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

  it('should render header blouse headline', fakeAsync(() => {
    updateUrlSubject.next('');
    fixture.detectChanges();

    tick(60);
    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector('.container-main-blouse-headline > h1');
    expect(header.textContent.trim()).toBe("BLUSA");
  }));

  it('should render span all headline feminino.roupas.blusa', fakeAsync(() => {
    updateUrlSubject.next('');
    fixture.detectChanges();

    tick(60);
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.container-main-blouse-headline > span');
    expect(span.textContent.trim()).toBe("feminino.roupas.blusa");
  }));
});
