import { getCookie, setCookie } from "typescript-cookie";
import { ESession } from "../enums/auth.enum";

interface IAuthCookies {
    token: string;
    userID: string;
}

export const setAuthCookies = ({ token, userID }: IAuthCookies) => {
    setCookie(ESession.JWT, token);
    setCookie(ESession.USER_ID, userID);
};

export const getAuthCookies = () => {
    return {
        token: getCookie(ESession.JWT),
        userID: getCookie(ESession.USER_ID),
    };
};

export const removeAllCookies = () => {
    setCookie(ESession.JWT, '');
    setCookie(ESession.USER_ID, '');
};