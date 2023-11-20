// 這兩種寫法都沒問題
import React from "react";

import module from "./multiply";

export default function CommonJS() {
    return <div>
        <p>CommonJS</p>
        {module.multiply(5, 9)}
    </div>;
}