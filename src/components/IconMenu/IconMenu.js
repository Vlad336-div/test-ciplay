import React from 'react';
import {IconWrap} from "./styles";

const IconMenu = ({showMenu, click}) => {
    return (
        <IconWrap
            showMenu={showMenu}
            onClick={click}
        >
            <span></span><span></span><span></span>
        </IconWrap>
    );
};

export default IconMenu;