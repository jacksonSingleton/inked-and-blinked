import React from "react";
import clsx from "clsx";

export type MenuLink = {
    title: string;
    url?: string;
};

export type DropdownMenu = {
    title: string;
    children?: MenuLink[];
};

export interface IProps {
    title: string;
    url?: string;
    children?: MenuLink[];
    onHover?: (items: MenuLink[]) => void;
}

export default function MenuItem(props: IProps) {
    const { title, url, children } = props;
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            {url && (
                <a
                    href={url}
                    className="font-sans uppercase text-gray-900 hover:text-pink-900 text-3xl"
                >
                    <h3>{title}</h3>
                </a>
            )}
            {children && (
                <div className="font-sans uppercase text-3xl" onMouseEnter={() => onHover(children)}>
                    <h3 className="hover:text-pink-900 text-gray-900 cursor-pointer">
                        {title}
                    </h3>
                </div>
            )}
        </div>
    );
}
