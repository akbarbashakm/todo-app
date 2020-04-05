import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
    border: transparent;
    color: rgba(44, 47, 66, 0.6);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    outline: none;
    line-height: 1.41;
    margin-left: 17px;
`;
const Button = ({
    buttonName = '',
    onClickAction = () => {}
}) => {
    return (
        <ButtonComponent type={'submit'} onClick={onClickAction}>{buttonName}</ButtonComponent>
    )
}

export default Button;
