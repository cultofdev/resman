import http from '../util/http';

class PrizeService {
    get(url) {
        return http.get(url)
    }

    put(url, data) {
        return http.put(url, data);
    }
}

export default new PrizeService();