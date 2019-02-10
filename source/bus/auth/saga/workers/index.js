import { login } from './login';
import { signup } from './signup';
import { authenticate } from './authenticate';
import { initialize } from './initialize';
import { logout } from './logout';

export const workers = {
    login,
    signup,
    authenticate,
    initialize,
    logout,
};
