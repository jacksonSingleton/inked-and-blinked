import React from 'react'
import { MenuLink } from './atoms/MenuItem'

interface IProps {
    items: MenuLink[]
}

export default function Drawer(props: IProps) {
    return (
        <ul>
            {items.map((item, index) => {
                return <li key={index}>{item.title}</li>
            }}
        </ul>
    )
}
