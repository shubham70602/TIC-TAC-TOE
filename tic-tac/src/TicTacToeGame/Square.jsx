import React from "react";

const Square = ({ onClick, value }) => {
    return (
        <div className="square" onClick={onClick}>
            {value}
        </div>
    );
};

export default Square;
