import React from "react";
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
      <nav className="flex bg-pink-300 items-center justify-evenly p-6 shadow-md">
        <img src="../src/images/lipLogo.png" alt="logo" className="w-32 h-24 object-contain" />
        <div className="flex space-x-6">
          {items.map((item: MenuLink | DropdownMenu, index) => {
            return <MenuItem key={index} {...item} onHover={onHover} />;
          })}
        </div>
      </nav>
      {drawerIsOpen && <Drawer items={drawerItems}/>}
    </div>
  );
}
