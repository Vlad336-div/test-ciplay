import styled from "styled-components"

const IconWrap = styled.div`
  position: absolute;
  top: 30px;
  right: ${props => props.showMenu ? "30px" : "50%"};
  transform: ${props => props.showMenu ? "none" : "translateX(50%)"};
  cursor: pointer;
  
  & span {
    display: block;
    width: ${props => props.showMenu ? "4px" : "20px"};
    height: 4px;
    background: #fff;
    margin-bottom: 3px;
    border-radius: 3px;
    transition: all 0.3s;
  } 
`

export {IconWrap}