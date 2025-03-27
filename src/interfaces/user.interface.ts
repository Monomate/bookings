import { UserRoleType } from '../types/role.type';
import { CountryCodeType, CountryType } from '../types/country.type';

export interface IUser {
    _id: string;
    name: string;
    lastName: string;
    email: string;
    countryCode: CountryCodeType;
    country: CountryType;
    mobile: string;
    fullMobile: string;
    password?: string;
    hasPassword: boolean;
    role: UserRoleType;
    token: string;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    image?: {
        thumbnail: string;
        original: string;
    } | null;
}
