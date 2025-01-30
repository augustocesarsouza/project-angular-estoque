export interface User {
  id: string;
  name: string;
  lastName: string;
  birthDate: string;
  gender: string;
  cpf: string;
  email: string;
  landline: string;
  cellPhone: string;
  userImage: string | null;
  confirmEmail: number;
  token: string;
}
