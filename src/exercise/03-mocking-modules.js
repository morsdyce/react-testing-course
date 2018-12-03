import { getCurrentUser } from './external-api';

export function isCurrentUserAdmin() {
  const user = getCurrentUser();

  return user.isAdmin;
}
