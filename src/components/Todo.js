import React, { useState } from 'react'
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import { Text } from './Text';

const Root = styled.div`
    border-bottom: 1px solid #212323;
    width: 35%;
    margin-bottom: 15px;
    padding-bottom: 15px;
`;

const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;


const Todo = ({ onClick, completed, text, onDelete, onUpdate }) => {
  const [isEdit, setEdit] = useState(false);
  const [inputValue, setValue] = useState(text);
  const changeText = (e) => {
    e && e.preventDefault();
    setValue(e.target.value);
  }

  const updateText = (e) => {
    e && e.preventDefault();
    onUpdate(inputValue);
    setEdit(false);
  }

  return (
    <Root>
      <div>
        <CheckBox onClick={onClick} type={'checkbox'} checked={completed === true} />
        {!isEdit ? <Text 
          completed={completed}
          widthSize={'40%'}
        >{inputValue}</Text> : <Input inputValue={inputValue} onChangeAction={changeText} />}
        <Button
          buttonName={`${isEdit ? 'Save' : 'Edit'}`}
          onClickAction={
            isEdit ? updateText : () => setEdit(true)
          }
        />
        <Button buttonName={'Delete'} onClickAction={onDelete} />
      </div>
    </Root>
  )
}

export default Todo
