import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDataComponent } from './registration-data.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserService } from '../../service/update-user.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { GoogleApiService } from '../../../../login-and-register-new-account/service/google-api.service';
// import { DateTimeProvider, OAuthLogger, OAuthService, UrlHelperService } from 'angular-oauth2-oidc';

class MockGoogleApiService {}
class MockUpdateUserService {}
class MockOAuthService {}

describe('RegistrationDataComponent', () => {
  let component: RegistrationDataComponent;
  let fixture: ComponentFixture<RegistrationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationDataComponent],
      imports: [AllSvgModule, HttpClientModule, RouterTestingModule],
      providers: [
        { provide: GoogleApiService, useClass: MockGoogleApiService },
        { provide: UpdateUserService, useClass: MockUpdateUserService },
        { provide: OAuthService, useClass: MockOAuthService },
      ]
      // providers: [GoogleApiService, UpdateUserService, OAuthService, UrlHelperService,
      //   OAuthLogger, DateTimeProvider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header finish your register', () => {
    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector('.header-finish-your-register');
    expect(header.textContent.trim()).toBe('COMPLETE SEU CADASTRO');
  });

  it('should render label name', () => {
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label[for="name"]')
    expect(label.textContent.trim()).toBe('* Nome:');
  });

  it('should render input name', () => {
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#name')
    expect(input).not.toBeNull();
  });

  it('should render label last-name', () => {
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label[for="last-name"]')
    expect(label.textContent.trim()).toBe('* Sobrenome:');
  });

  it('should render input last-name', () => {
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#last-name')
    expect(input).not.toBeNull();
  });

  it('should render span error last-anme', () => {
    component.spanErrorLastName.nativeElement.style.display = "flex";
    const span = component.spanErrorLastName.nativeElement;

    fixture.detectChanges();

    expect(span.textContent?.trim()).toBe("sobrenome deve ter pelo menos 3 caracteres");
  });

  it('should render label birthdate', () => {
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label[for="birthdate"]')
    expect(label.textContent.trim()).toBe('* Data de Nascimento:');
  });

  it('should render input birthdate', () => {
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#birthdate')
    expect(input).not.toBeNull();
  });

  it('should render span error last-anme', () => {
    component.spanErrorBirthDate.nativeElement.style.display = "flex";
    const span = component.spanErrorBirthDate.nativeElement;

    fixture.detectChanges();

    expect(span.textContent?.trim()).toBe("Data de Nascimento não está completo");
  });

  it('should render label gender', () => {
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label[for="gender"]')
    expect(label.textContent.trim()).toBe('* Sexo:');
  });

  it('should render all option gender', () => {
    const select = component.selectGender.nativeElement;
    const options = select.querySelectorAll("option");

    fixture.detectChanges();

    expect(options.length).toBe(4);
    expect(options[0].textContent?.trim()).toBe("Selecione");
    expect(options[1].textContent?.trim()).toBe("Feminino");
    expect(options[2].textContent?.trim()).toBe("Masculino");
    expect(options[3].textContent?.trim()).toBe("Não Informado");
  });

  it('should render span error gender', () => {
    component.spanErrorGender.nativeElement.style.display = "flex";
    const span = component.spanErrorGender.nativeElement;

    fixture.detectChanges();

    expect(span.textContent?.trim()).toBe("Deve ser selecionado um campo Genero");
  });

  it('should render label cpf', () => {
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label[for="cpf"]')
    expect(label.textContent.trim()).toBe('* CPF:');
  });

  it('should render input cpf', () => {
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#cpf')
    expect(input).not.toBeNull();
  });

  it('should render span error cpf invalid', () => {
    component.spanErrorCpf.nativeElement.style.display = "flex";
    const span = component.spanErrorCpf.nativeElement;

    fixture.detectChanges();

    expect(span.textContent?.trim()).toBe("Cpf é Inválido");
  });

  it('should render label email', () => {
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label[for="email"]')
    expect(label.textContent.trim()).toBe('* E-mail:');
  });

  it('should render input email', () => {
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#email')
    expect(input).not.toBeNull();
  });

  it('should render span error email', () => {
    component.spanErrorEmail.nativeElement.style.display = "flex";
    const span = component.spanErrorEmail.nativeElement;

    fixture.detectChanges();

    expect(span.textContent?.trim()).toBe("Email é Inválido deve ter @gmail, @hotmail");
  });

  it('should render label landline', () => {
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label[for="landline"]')
    expect(label.textContent.trim()).toBe('Telefone Fixo:');
  });

  it('should render input landline', () => {
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#landline')
    expect(input).not.toBeNull();
  });

  it('should render span all span info bottom telefone', () => {
    fixture.detectChanges();

    const spans = fixture.nativeElement.querySelectorAll('.span-info-bottom-telefone');
    expect(spans.length).toBe(2);

    expect(spans[0].textContent.trim()).toBe("Ex: DDD + Telefone");
    expect(spans[1].textContent.trim()).toBe("Ex: DDD + Telefone");
  });

  it('should render span error email', () => {
    component.spanErrorLandline.nativeElement.style.display = "flex";
    const span = component.spanErrorLandline.nativeElement;

    fixture.detectChanges();

    expect(span.textContent?.trim()).toBe("Telefone Fixo é Inválido");
  });

  it('should render label cell-phone', () => {
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label[for="cell-phone"]')
    expect(label.textContent.trim()).toBe('* Telefone Celular:');
  });

  it('should render input cell-phone', () => {
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#cell-phone')
    expect(input).not.toBeNull();
  });

  it('should render span error cell phone', () => {
    component.spanErrorCellPhone.nativeElement.style.display = "flex";
    const span = component.spanErrorCellPhone.nativeElement;

    fixture.detectChanges();

    expect(span.textContent?.trim()).toBe("Telefone Celular é Inválido");
  });

  it('should render label cell-phone', () => {
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.button-save-register')
    expect(button.textContent.trim()).toBe('SALVAR');
  });
});
