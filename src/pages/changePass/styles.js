import styled from "styled-components"

const ChangePassWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChangePassForm = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #b2bec3;
  border-radius: 12px;
`

const InputWrap = styled.div`
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`

export {ChangePassWrap, ChangePassForm, InputWrap}