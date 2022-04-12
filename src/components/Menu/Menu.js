import React, {useState} from 'react';
import IconMenu from "../IconMenu/IconMenu";
import {MenuWrap, MenuContainer, LinkMenu} from "./styles";
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {ReactComponent as PasswordIcon} from "../../assets/images/password.svg";
import {ReactComponent as UserIcon} from "../../assets/images/user.svg";
import {ReactComponent as PencilIcon} from "../../assets/images/pencil.svg";
import {ReactComponent as HomeIcon} from "../../assets/images/home.svg";
import {ReactComponent as ExitIcon} from "../../assets/images/exit.svg";
import {logoutUser} from "../../store/actions";

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const {loggined} = useSelector(state => state.app)
    const dispatch = useDispatch()

    return (
        <MenuWrap showMenu={showMenu}>
            <MenuContainer showMenu={showMenu}>
                <IconMenu
                    showMenu={showMenu}
                    click={() => setShowMenu(prev => !prev)}
                />
                <LinkMenu showMenu={showMenu}>
                    <NavLink to="/home">
                        <HomeIcon/>
                        {showMenu && 'Home'}
                    </NavLink>
                </LinkMenu>
                {
                    !loggined && <LinkMenu showMenu={showMenu}>
                                    <NavLink to="/login">
                                        <UserIcon/>
                                        {showMenu && 'Login'}
                                    </NavLink>
                                </LinkMenu>
                }
                {
                    !loggined && <LinkMenu showMenu={showMenu}>
                                    <NavLink to="/registration">
                                        <PencilIcon/>
                                        {showMenu && 'Registration'}
                                    </NavLink>
                                </LinkMenu>
                }
                {
                    loggined && <LinkMenu showMenu={showMenu}>
                                    <NavLink to="/change">
                                        <PasswordIcon/>
                                        {showMenu && 'Change Password'}
                                    </NavLink>
                                </LinkMenu>
                }
                {
                    loggined && <LinkMenu showMenu={showMenu}>
                        <div onClick={() => dispatch(logoutUser())}>
                            <ExitIcon/>
                            {showMenu && 'Exit'}
                        </div>
                    </LinkMenu>
                }
            </MenuContainer>
        </MenuWrap>
    );
};

export default Menu;