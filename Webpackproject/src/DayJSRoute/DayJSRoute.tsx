import dayjs from "dayjs"
import moment from "moment";
import React from "react"
export function DayJSRoute() {
    console.log(dayjs("2018-01-01"));
    console.log(moment("20111031", "YYYYMMDD").fromNow())
    return <>test</>
}
DayJSRoute.displayName = "DayJSRoute"