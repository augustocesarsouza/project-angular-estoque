import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  async consultaCEP (cep: string) {
    if(cep === null || cep === undefined) return;

    cep = cep.replace(/\D/g, '');

    if(cep !== ""){
      const validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {

        const res = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        const json = await res.json();

        return json;
      }else {
        return undefined;
      }
    }else {
      return undefined;
    }
  }
}
