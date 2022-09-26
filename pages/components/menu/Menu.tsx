import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import Logo from "../../../public/images/logo.png"
import CustomBtn from '../customBtn/CustomBtn';
import { menuBtn, menuBtns } from './Config';
import menuStyle from "./style/Menu.module.css"

const MenuBtnP  = styled.p`
  margin: 0 15px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  color: black;
`

const Menu = () => {
  return (
    <div className={menuStyle.menuContainer}>
      <Image src={Logo} className={menuStyle.img}></Image>
      <div className={menuStyle.menuBtnsCont}>
        {menuBtns.map((menuBtn: menuBtn) => {
          return <MenuBtnP >{menuBtn.name}</MenuBtnP>
        })}
      </div>

      <CustomBtn text={"DOWNLOAD PDF"}/>
    </div> 
  )
}

export default Menu