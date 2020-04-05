import React from 'react';
import styled from 'styled-components';

const InputComponent = styled.input`
    font-size: 16px;
    outline: none 0px;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-radius: 3px;
    padding: 8px 52px 8px 10px;
`;
const Input = ({
    onChangeAction,
    inputValue = ''
}) => {
    return (
        <InputComponent onChange={onChangeAction} value={inputValue} />
    )
}

export default Input;