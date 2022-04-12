import styled from "styled-components"

const ErrorWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 3;
  right: 20px;
  bottom: ${props => props.visible ? "20px" : "-60px"};
  background: #d63031;
  border-radius: 4px;
  color: #fff;
  padding: 10px;
  
  & svg {
    margin-right: 10px;
    width: 20px;
  }
`

const SuccessfullWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 3;
  right: 20px;
  bottom: ${props => props.visible ? "20px" : "-60px"};
  background: #00b894;
  border-radius: 4px;
  color: #fff;
  padding: 10px;
  
  & svg {
    margin-right: 10px;
    width: 20px;
  }
`

export {ErrorWrap, SuccessfullWrap}