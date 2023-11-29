import ErrorPage from "../ErrorElement"
import "./index.scss"
const XlsxPageRoute = {
    path: "xlsx",
    async lazy() {
        const { XlsxPage, loader } = await import(/*webpackChunkName: "XlsxPage" */"./XlsxPageRoute")

        return { Component: XlsxPage, loader, ErrorBoundary: ErrorPage }
    },


}

export default XlsxPageRoute



