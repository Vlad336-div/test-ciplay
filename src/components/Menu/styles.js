import styled from "styled-components"

const MenuWrap = styled.div`
  height: calc(100% - 40px);
  width: ${props => props.showMenu ? "300px" : "50px"};
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  background-color: #6c5ce7;
  border-radius: 12px;
  transition: all 0.2s;
  overflow: hidden;
`

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 100px ${props => props.showMenu ? "30px" : "5px"} 0;
  position: relative;
  transition: all 0.2s;
`

const LinkMenu = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 30px;
  
  & a, & div {
    color: #fff;
    text-decoration: none;
    text-align: left;
    padding: 10px;
    background: #0984e3;
    border-radius: 4px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    transition: all 0.2s;
    cursor: pointer;
    
  

    & svg {
      width: 20px;
      margin-right: ${props => props.showMenu ? "5px" : "none"};
    }
  }
  
  & a:hover, & div:hover {
    background: #a29bfe;
  }
  
`

export {MenuWrap, MenuContainer, LinkMenu}