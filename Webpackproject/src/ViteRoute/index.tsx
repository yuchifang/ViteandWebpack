import ErrorPage from "../ErrorElement"
const ViteRoute = {
    path: "vite",
    async lazy() {
        const { ViteRoute } = await import(/*webpackChunkName: "ViteRoute" */"./ViteRoute")
        return { Component: ViteRoute, ErrorBoundary: ErrorPage }
    },


}

export default ViteRoute