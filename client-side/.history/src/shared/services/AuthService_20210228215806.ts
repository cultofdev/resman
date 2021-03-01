import http from '../util/http';

class AuthService {
    login(url: string, params: any) {
        return http.get(url, { params: params });
    }

    post(url: string, data: any) {
        return http.post(url, data);
    }
}

export default new AuthService();