import React from "react";

type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = () => {
    return <input type="text"/>
}