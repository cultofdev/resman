import http from '../util/http';

class PrizeService {
    get(url, params) {
        return http.get(url, {params: params});
    }

    put(url, data) {
        return http.put(url, data);
    }
}

export default new PrizeService();