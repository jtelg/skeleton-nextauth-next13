
// import MethodService from "./method";

import { cookie } from "@/lib/cookies";
import MethodService from "./method";

export default class UserService {
    private readonly servmethod: MethodService = new MethodService();

    getUserFromCookies(): UserData {
        return JSON.parse(cookie.GET("userSession") || '');
    }

    getUserByEmail(email: string) {
        const url = `/user/${email}?path=getByID`
        return this.servmethod.getData(url);
    };

}
