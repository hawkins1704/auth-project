import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <>
            <Link to={'/'}>Go Back</Link>
            <div>Oh! You Get Lost!</div>
        </>
    );
};
