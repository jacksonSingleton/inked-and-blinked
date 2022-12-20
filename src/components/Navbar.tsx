import React from "react";
import MenuItem, { MenuLink, DropdownMenu } from "./atoms/MenuItem";
import Drawer from './Drawer'

interface IProps {
    items: MenuItem[] | DropdownMenu[];
}

export default function Navbar(props: IProps) {
    const { items } = props
    const [drawerIsOpen, setDrawerIsOpen ] = React.useState(false)

    const onHover = React.useCallback((items: MenuLink[]) => {
        setDrawerIsOpen(true)
    })
    return (
        <nav className="flex bg-pink-300 items-center justify-evenly p-6">
            <img src="../src/images/logo.png" alt="logo" className="w-32"/>
            <div className="flex space-x-6">
                {items.map((item: MenuItem | DropdownMenu, index) => {
                    return <MenuItem key={index} {...item} />
                })}
            </div>
        </nav>
        {drawerIsOpen && <Drawer items={items} />}
    );
}
