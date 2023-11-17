import React from "react";
import { Link } from "react-router-dom";
//@ts-ignore
import img from "../../public/logo192.png"

export function IMGRoute() {

    return <div>
        {img && <img src={img} />}
        <Link to="/">MainPage</Link>
    </div>;
}
IMGRoute.displayName = "IMGRoute"