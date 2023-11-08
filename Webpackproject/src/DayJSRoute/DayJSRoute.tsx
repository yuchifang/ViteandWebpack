import dayjs from "dayjs"
import React, { Suspense, lazy, useState } from "react"
import { Link } from "react-router-dom";
export function DayJSRoute() {
    const [lazyLoad, setLazyLoad] = useState(false)
    const [codeSplit, setCodeSplit] = useState(false)
    let Page = undefined
    console.log(dayjs("2018-01-01"));

    const handleCodeSplit = () => {
        setCodeSplit(true)
    }
    const handleLazyLoad = () => {
        setLazyLoad(true)
    }
    if (codeSplit) {
        import(/*webpackChunkName:"moment"*/ 'moment').then(module => {
            console.log("module", module)
            console.log(module.default("20111031", "YYYYMMDD").fromNow())
        })
    }
    if (lazyLoad) {
        Page = lazy(() => import(/*webpackChunkName:"TestPage"*/"../TestPage"))
    }

    return <>
        <Link to="/">MainPage</Link>
        <p>test lazy load code split</p>
        <button onClick={handleLazyLoad}>test lazy load</button>
        <button onClick={handleCodeSplit}>test code split</button>
        {Page && <Suspense fallback={<>Loading</>}>
            <Page />
        </Suspense>}
    </>
}
DayJSRoute.displayName = "DayJSRoute"