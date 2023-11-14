import React from "react";
import { Link } from "react-router-dom";
//@ts-ignore
import img from "../../public/logo192.png"

export function IMGRoute() {
    <Link to="/">MainPage</Link>

    return <div>
        {img && img}
        <p>IMGRoute</p>
    </div>;
}
IMGRoute.displayName = "IMGRoute"