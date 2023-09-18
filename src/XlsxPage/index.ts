const XlsxPageRoute = {
    path: "xlsx",
    async lazy() {
        const { XlsxPage, loader } = await import(/*webpackChunkName: "XlsxPage" */"./XlsxPageRoute")
        return { Component: XlsxPage, loader }
    }

}

export default XlsxPageRoute
// 判斷 JS 有沒有被 cash 了解 contenthash


