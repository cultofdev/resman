import http from '../util/http';

class AuthService {
    login(url, params) {
        return http.get(url, { params: params });
    }

    post(url, data) {
        return http.post(url, data);
    }
}