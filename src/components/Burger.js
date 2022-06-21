import React , { useState } from 'react';

import styled from "styled-components";
import "../style/responsive.css";


const Div = styled.div`
display : none;
@media (max-width: 992px ){
    width: 1.5rem;
    height: 1.3rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
div {
    width: 1.5rem;
    height: 0.20rem;
    background-color: #111;
    border-radius: 10px;

    &:nth-child(1) {
         transform : ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    } 

    &:nth-child(2) {
        transform : ${(props) => (props.open ? "translateX(-100%)" : "translateX(0)")};
        opacity: ${(props) => (props.open ? 0 : 1)};
    } 

}
`;

const Burger = () => {
    const [menu , setMenu] = useState({
        open : false,
    });
   
    const  menuHandler = () => {
        setMenu({
            open : !menu.open
        })
        console.log(menu.open);
    }

    return (
               <Div className="humburger-menu" onClick={menuHandler} openn={menu.open}  >
                        <div></div>
                        <div></div>
                        <div></div>
                </Div>
    );
};

export default Burger;