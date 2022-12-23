import React from "react";
import { Transition } from '@headlessui/react'
import MenuItem, { MenuLink, DropdownMenu } from "./atoms/MenuItem";
import Drawer from "./Drawer";

interface IProps {
  items: MenuLink[] | DropdownMenu[];
}

export default function Navbar(props: IProps) {
  const { items } = props;
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const [drawerItems, setDrawerItems] = React.useState<MenuLink[]>([]);

  const onHover = React.useCallback((children?: MenuLink[]) => {
    if (children) {
      setDrawerItems(children);
      setDrawerIsOpen(true);
      return;
    }
    setDrawerItems([]);
    setDrawerIsOpen(false);
  }, []);
  return (
    <div onMouseLeave={() => setDrawerIsOpen(false)}>
      <nav className="flex bg-gray-900 items-center justify-between p-6 shadow-md">
      <a href="/"><img src="../src/images/lipLogo.png" alt="logo" className="w-32 h-16 object-contain" /></a>
        <div className="flex space-x-6">
          {items.map((item: MenuLink | DropdownMenu, index) => {
            return <MenuItem key={index} {...item} onHover={onHover} />;
          })}
        </div>
      </nav>
      <Transition
        show={drawerIsOpen}
        enter="transition ease-out duration-50"
        enterFrom="-translate-y-64"
        enterTo="translate-y-0"
        leave="transition ease-in duration-50"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-64"
        className="-z-10 absolute w-full"
        >
          <Drawer items={drawerItems}/>
        </Transition>
    </div>
  );
}
