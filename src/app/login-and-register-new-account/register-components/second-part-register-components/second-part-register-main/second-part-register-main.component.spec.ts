import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPartRegisterMainComponent } from './second-part-register-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { UserService } from '../../../../services-backend/user.service';
import { WhereIsComingCustomerPanelAndRegisterUserService } from '../../../service/where-is-coming-customer-panel-and-register-user.service';
import { RegisterPasswordValidatePartComponent } from '../register-password-validate-part/register-password-validate-part.component';
import { ButtonRegisterComponent } from '../button-register/button-register.component';
import { By } from '@angular/platform-browser';
import { UpdateUserService } from '../../../../customer-panel/my-account/service/update-user.service';

class MockUserService {}
class MockWhereIsComingCustomerPanelAndRegisterUserService {}
class MockUpdateUserService {}

describe('SecondPartRegisterMainComponent', () => {
  let component: SecondPartRegisterMainComponent;
  let fixture: ComponentFixture<SecondPartRegisterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [SecondPartRegisterMainComponent, RegisterPasswordValidatePartComponent,
        ButtonRegisterComponent
      ],
      providers: [
        { provide: UserService, useClass: MockUserService },
        { provide: WhereIsComingCustomerPanelAndRegisterUserService, useClass: MockWhereIsComingCustomerPanelAndRegisterUserService },
        { provide: UpdateUserService, useClass: MockUpdateUserService },
      ]
    })
    .compileComponents();

    // constructor(private userService: UserService, private router: Router,
    //     private whereIsComingCustomerPanelAndRegisterUserService: WhereIsComingCustomerPanelAndRegisterUserService,
    //     private updateUserService: UpdateUserService
    //   ){}

    fixture = TestBed.createComponent(SecondPartRegisterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o título corretamente', () => {
    const h1 = fixture.debugElement.query(By.css('.header-finish-your-register')).nativeElement;
    expect(h1.textContent.trim()).toBe('COMPLETE SEU CADASTRO');
  });

  it('deve exibir todos os labels corretamente', () => {
    const labels = fixture.debugElement.queryAll(By.css('label')).map(el => el.nativeElement.textContent.trim());

    expect(labels).toContain('* Nome:');
    expect(labels).toContain('* Sobrenome:');
    expect(labels).toContain('* Data de Nascimento:');
    expect(labels).toContain('* Sexo:');
    expect(labels).toContain('* CPF:');
    expect(labels).toContain('* E-mail:');
    expect(labels).toContain('Telefone Fixo:');
    expect(labels).toContain('* Telefone Celular:');
  });

  it('deve conter os campos de input e select no DOM', () => {
    const inputs = fixture.debugElement.queryAll(By.css('input')).map(el => el.nativeElement);
    const select = fixture.debugElement.query(By.css('select'))?.nativeElement;

    expect(inputs.length).toBe(11); // Deve conter 7 inputs
    expect(select).toBeTruthy(); // O select deve existir
  });
});
