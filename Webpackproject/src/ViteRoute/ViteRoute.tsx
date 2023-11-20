import React, { ReactNode, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

// const module = await import('../TestPage')
// const modules = import.meta.glob("./test/*.tsx", { import: 'default' })
// const data = await Promise.all(Object.keys(modules).map(item => modules[item]()))
export function ViteRoute() {
    return <div>
        {/* {module.default()} */}
        {/* {data.map((item: () => ReactNode) => item())} */}
        <Link to="/">MainRoute</Link>
        <Outlet />
    </div>;
}
ViteRoute.displayName = "ViteRoute"