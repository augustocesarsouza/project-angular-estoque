import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPartCustomerPanelComponent } from './first-part-customer-panel.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MyAccountFirstPartCustomerPanelComponent } from '../my-account-first-part-customer-panel/my-account-first-part-customer-panel.component';
import { MyOrdersFirstPartCustomerPanelComponent } from '../my-orders-first-part-customer-panel/my-orders-first-part-customer-panel.component';
import { UpdateLastContainerInfoAboutMyAccountService } from '../../service/update-last-container-info-about-my-account.service';
import { UpdateUserService } from '../../service/update-user.service';
import { of } from 'rxjs';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { GoogleApiService } from '../../../../login-and-register-new-account/service/google-api.service';

const mockUpdateUserService = {
  updateUser$: of({ name: 'Usuário Teste' }) // 🔥 Simula um observable com um usuário de teste
};

const mockUpdateLastContainerInfoAboutMyAccountService = {}; // Se este serviço precisar de métodos, adicione mocks aqui
const mockGoogleApiService = {};

describe('FirstPartCustomerPanelComponent', () => {
  let component: FirstPartCustomerPanelComponent;
  let fixture: ComponentFixture<FirstPartCustomerPanelComponent>;

  const user = {
    id: "76b6665d-ae61-4120-ac32-1c9db9a7fefd",
    name: "Augusto",
    lastName: "lastName",
    birthDate: "birthDate",
    gender: "gender",
    cpf: "cpf",
    email: "augustocesarsantana90@gmail.com",
    landline: "landline",
    cellPhone: "cellPhone",
    userImage: null,
    confirmEmail: 0,
    token: "asdasd",
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [FirstPartCustomerPanelComponent, MyAccountFirstPartCustomerPanelComponent, MyOrdersFirstPartCustomerPanelComponent],
      providers: [
        { provide: UpdateUserService, useValue: mockUpdateUserService },
        { provide: UpdateLastContainerInfoAboutMyAccountService, useValue: mockUpdateLastContainerInfoAboutMyAccountService },
        { provide: GoogleApiService, useValue: mockGoogleApiService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPartCustomerPanelComponent);
    component = fixture.componentInstance;
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span hello', () => {
    const span = fixture.nativeElement.querySelector('.span-hello');
    expect(span.textContent.trim()).toBe("Olá,");
  });

  it('should render span name user', () => {
    fixture.detectChanges();

    const spans = fixture.nativeElement.querySelectorAll('.container-name-user-and-exit > span');
    expect(spans[0].textContent.trim()).toBe(user.name);
    expect(spans[1].textContent.trim()).toBe("Sair");
  });

  it('should render span vale purchase', () => {
    const span = fixture.nativeElement.querySelector('.span-vale-purchase');
    expect(span.textContent.trim()).toBe("Vale Compra");
  });
});
