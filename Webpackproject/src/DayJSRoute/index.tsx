import ErrorPage from "../ErrorElement"
const DayJSRoute = {
    path: "dayjs",
    async lazy() {
        const { DayJSRoute } = await import(/*webpackChunkName: "DayJSRoute" */"./DayJSRoute")
        return { Component: DayJSRoute, ErrorBoundary: ErrorPage }
    },


}

export default DayJSRoute



