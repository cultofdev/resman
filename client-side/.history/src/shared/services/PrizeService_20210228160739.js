import http from '../util/http';

class PrizeService {
    get(url, params) {
        return http.get(url, {params: params});
    }
}

export default new PrizeService();