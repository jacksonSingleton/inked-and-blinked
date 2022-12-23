import React from "react";
import type { MenuLink } from "./atoms/MenuItem";
import clsx from "clsx";

interface IProps {
  items: MenuLink[];
}

export default function Drawer(props: IProps) {
  const { items } = props;

  const classList = ["flex flex-col absolute bg-pink-100 w-full p-4"] 

  return (
    <ul className={clsx(classList)}>
      {items.map((item, index) => {
        return (
          <li key={index} className="py-2">
            <a href={item.url} className="text-xl text-gray-900 uppercase hover:text-pink-900 font-bold">{item.title}</a>
          </li>
        );
      })}
    </ul>
  );
}
