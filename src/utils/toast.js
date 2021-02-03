import Vue from "vue";

class Toast {
    /**
     * 成功消息提示
     */
    static success(message) {
        Vue.prototype.$message({
            message: message,
            type: 'success',
            center: true
        });
    }

    /**
     * 提醒消息提示
     */
    static warning(message) {
        Vue.prototype.$message({
            message: message,
            type: 'warning',
            center: true
        });
    }

    /**
     * 错误消息提示
     */
    static error(message) {
        Vue.prototype.$message({
            message: message,
            type: 'error',
            center: true
        });
    }
}

export default Toast;
