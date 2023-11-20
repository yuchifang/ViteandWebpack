import React from "react"
import ErrorPage from "../ErrorElement"
import CommonJS from "./CommonJS/CommonJS"

const ViteRoute = {
    path: "vite",
    async lazy() {
        const { ViteRoute } = await import(/*webpackChunkName: "ViteRoute" */"./ViteRoute")
        return { Component: ViteRoute, ErrorBoundary: ErrorPage }
    },
    children: [
        {
            path: "commonJS",
            element: <CommonJS />,
            errorElement: <ErrorPage />
        }
    ]
}

export default ViteRoute