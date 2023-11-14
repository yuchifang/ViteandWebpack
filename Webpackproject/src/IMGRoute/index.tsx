import ErrorPage from "../ErrorElement"
const IMGRoute = {
    path: "img",
    async lazy() {
        const { IMGRoute } = await import(/*webpackChunkName: "IMGRoute" */"./IMGRoute")
        return { Component: IMGRoute, ErrorBoundary: ErrorPage }
    },


}

export default IMGRoute