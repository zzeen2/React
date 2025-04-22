"use strict";

const message = (props) => {
    const arr = [1,2,3];

    const arr2 = [...arr];

    console.log(`${arr2}${props}`);
}
message("안녕")