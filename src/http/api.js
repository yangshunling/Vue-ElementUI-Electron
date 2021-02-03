import http from "./rxhttp";
/**
 * 用户授权
 */
export function fund_info(params) {
    return http.post("/fund_basi_info", params);
}
