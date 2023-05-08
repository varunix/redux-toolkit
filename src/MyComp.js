import React from "react";
import { useAppSelector } from "./redux/hooks";

const MyComp = () => {
    const count = useAppSelector((s) => s.counter);
    return <h1>My Comp: {count}</h1>
};

export default MyComp;