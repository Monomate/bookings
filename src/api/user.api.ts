import { EPaths } from "../enums/paths.enum";
import { ICompleteProfilePayload } from "../interfaces/user.interface";
import { API } from "./config.api";

const path = EPaths.USERS;

const completeProfile = async (payload: ICompleteProfilePayload) => API.post(`${path}/complete-profile`, payload);

export { completeProfile };