
const XlsxPageRoute = {
    path: "xlsx",
    async lazy() {
        const { XlsxPage, loader } = await import(/*webpackChunkName: "XlsxPage" */"./XlsxPageRoute")
        const ErrorPage = await import(/*webpackChunkName: "ErrorPage" */"../ErrorElement")
        return { Component: XlsxPage, loader, ErrorBoundary: ErrorPage }
    },


}

export default XlsxPageRoute



