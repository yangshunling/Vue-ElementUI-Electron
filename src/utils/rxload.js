import Vue from "vue"

let vue = new Vue()
let loading

/**
 * 开启进度条
 * @param loadText 加载的文字
 */
function openLoadding(loadText = "加载中...") {
    loading = vue.$loading({
        lock: true,
        text: loadText,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}

/**
 * 关闭进度条
 */
function closeLoadding() {
    loading && loading.close()
}

export { openLoadding, closeLoadding }
