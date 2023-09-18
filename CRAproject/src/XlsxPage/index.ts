const XlsxPageRoute = {
    path: "xlsx",
    async lazy() {
        const { XlsxPage, loader } = await import(/*webpackChunkName: "XlsxPage" */"./XlsxPageRoute")
        return { Component: XlsxPage, loader }
    }

}

export default XlsxPageRoute
// 要不要都在這個專案做 
    // 想想要怎麼不同的打包方式但使用同個 src 
    //!無法
    // 改成 其他專案 讀此 src 的檔案
// 判斷 JS 有沒有被 cash 找個 web page
// 紀錄 contenthash 做個/找 webpack 頁面



