let storage = {
    set(key, value) {
        //对象必须序列化才能存入缓存
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        //反序列化
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key) {
        localStorage.removeItem(key);
    }
}
export default storage;
