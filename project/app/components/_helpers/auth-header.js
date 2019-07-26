/* eslint-disable prettier/prettier */
/* eslint-disable import/no-cycle */
import { authenticationService } from "../_services";

export function authHeader() {
  // return authorization header with jwt token
  const currentUser = authenticationService.currentUserValue;
  if (currentUser && currentUser.token) {
    return { Authorization: `Bearer ${currentUser.token}` };
  }
  return {};
}
