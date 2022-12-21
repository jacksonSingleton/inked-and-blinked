import React from "react";
import type { MenuLink } from "./atoms/MenuItem";
import clsx from "clsx";

interface IProps {
  items: MenuLink[];
}

export default function Drawer(props: IProps) {
  const { items } = props;

  const classList = ["flex flex-col absolute bg-gray-900 w-full p-4 -z-10"] 

  return (
    <ul className={clsx(classList)}>
      {items.map((item, index) => {
        return (
          <li key={index} className="text-lg text-pink-100 uppercase hover:text-pink-200">
            <a href={item.url}>{item.title}</a>
          </li>
        );
      })}
    </ul>
  );
}
