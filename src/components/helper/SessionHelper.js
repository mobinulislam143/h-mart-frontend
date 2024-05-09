import Cookie from "js-cookie";

class SessionHelper {
    static getToken() {
        return  Cookie.get('token')
    }
}

export default SessionHelper;
