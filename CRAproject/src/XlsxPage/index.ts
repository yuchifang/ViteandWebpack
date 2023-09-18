const XlsxPageRoute = {
    path: "xlsx",
    async lazy() {
        const { XlsxPage, loader } = await import(/*webpackChunkName: "XlsxPage" */"./XlsxPageRoute")
        return { Component: XlsxPage, loader }
    }

}

export default XlsxPageRoute



