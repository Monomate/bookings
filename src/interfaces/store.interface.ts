export interface IStore<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    setLoading: (value: boolean) => void;
    setError: (value: string) => void;
    setData: (value: T) => void;
}

