import React from "react";
import { Link } from "react-router-dom";
import img from "../../public/logo192.png"

export function IMGRoute() {
    <Link to="/">MainPage</Link>

    return <div>
        <p>IMGRoute</p>
        {img && <img src={img} />}
    </div>;
}
IMGRoute.displayName = "IMGRoute"