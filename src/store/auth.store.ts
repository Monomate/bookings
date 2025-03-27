import { create } from 'zustand';
import { IAuthStore } from '../interfaces/auth.interface';
import { AuthAPI } from '../api';
import { IUser } from '../interfaces/user.interface';
import { setAuthCookies } from '../cookies/auth.cookies';

export const useAuthStore = create<IAuthStore>((set) => ({
    data: null,
    token: null,
    loading: false,
    error: null,
    setLoading: (loading: boolean) => set(() => ({ loading })),
    setError: (error: string) => set(() => ({ error })),
    setData: (data: IUser) => {
        setAuthCookies({ token: data.token, userID: data._id });
        set(() => ({ data }));
    }
}));

export const startLoadUser = async () => {
    useAuthStore.setState(() => ({ loading: true }));
    const { data } = await AuthAPI.verifyToken();
    useAuthStore.setState(() => ({ data, loading: false }));
};
