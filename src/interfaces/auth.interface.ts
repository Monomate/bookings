import { IStore } from "./store.interface";
import { IUser } from "./user.interface";

export interface ISignInPayload {
    email: string;
    password: string;
}

export interface IAuthStore extends IStore<IUser> {
    token: string | null;
}
