import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNavCategoryComponent } from './all-nav-category.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { ModalNewsComponent } from '../modal-news/modal-news.component';
import { ModalFeminineComponent } from '../modal-feminine/modal-feminine.component';
import { ModalMasculineComponent } from '../modal-masculine/modal-masculine.component';
import { ModalChildrenComponent } from '../modal-children/modal-children.component';
import { ModalHomeComponent } from '../modal-home/modal-home.component';
import { ModalBranchComponent } from '../modal-branch/modal-branch.component';

describe('AllNavCategoryComponent', () => {
  let component: AllNavCategoryComponent;
  let fixture: ComponentFixture<AllNavCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [AllNavCategoryComponent, ModalNewsComponent, ModalFeminineComponent,
        ModalMasculineComponent, ModalChildrenComponent, ModalHomeComponent, ModalBranchComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNavCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all header', () => {
    const headers = fixture.nativeElement.querySelectorAll('.container-category > h1');
    expect(headers.length).toEqual(6);
  });

  it('should render all spans and yours values', () => {
    const headers = fixture.nativeElement.querySelectorAll('.container-category > h1');
    expect(headers[0].textContent).toBe("NOVIDADES");
    expect(headers[1].textContent).toBe("FEMININO");
    expect(headers[2].textContent).toBe("MASCULINO");
    expect(headers[3].textContent).toBe("INFANTIL");
    expect(headers[4].textContent).toBe("CASA");
    expect(headers[5].textContent).toBe("MARCAS");
  });
});
