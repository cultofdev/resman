import http from '../util/http';

class PrizeService {
    get(url, params) {
        return http.get(url, {params: params});
    }

    patch(url, data) {
        return http.patch(url, data);
    }
}

export default new PrizeService();