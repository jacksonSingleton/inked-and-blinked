import React from "react";
import clsx from "clsx";

interface IProps {
    variant?: string;
}

export default function Button(props: IProps) {
    const variant = props.variant || "gray";
    console.log(variant);

    return (
        <div>
            <button
                className={clsx(`
                bg-${variant}-400
                hover:bg-${variant}-500
                text-white
                text-xl
                font-bold
                py-3
                px-5
                rounded`)}
            >
                {props.children}
            </button>
        </div>
    );
}
