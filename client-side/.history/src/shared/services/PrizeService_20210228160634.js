import http from '../util/http';

class PrizeService {
    get(url, params) {
        return http.get(url, {params: params});
    }

    put(url, params) {
        return http.put(url, {param: params});
    }
}

export default new PrizeService();