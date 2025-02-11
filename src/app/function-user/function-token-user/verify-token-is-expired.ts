import { decodeJwt, JWTPayload } from 'jose';

export const VerifyTokenIsExpired = (token: string): boolean => {
  const payload = decodeJwt(token) as JWTPayload;

  const currentTime = Math.floor(Date.now() / 1000);
  const tokenExpiration = payload.exp;

  if (tokenExpiration && currentTime > tokenExpiration) {
    return true;
  } else {
    return false;
  }
}
