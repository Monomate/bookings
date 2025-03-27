import { API } from "./config.api";
import { ISignInPayload } from '../interfaces/auth.interface';
import { EPaths } from "../enums/paths.enum";

const path = EPaths.USERS;

const signIn = async (payload: ISignInPayload) => API.post(`${path}/sign-in`, payload);

const signUp = async (email: string) => API.post(`${path}/sign-up-email`, { email, origin: 'WEB' });

const verifyToken = async () => API.get(`${path}/verify-token`);

export {
    signIn,
    signUp,
    verifyToken,
};