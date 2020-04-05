import React from 'react';
import styled from 'styled-components';
import { Text } from './Text';

const Parent = styled.div`
    border-bottom: 2px solid #212323;
    width: 35%;
    margin-bottom: 15px;
`;

const RootElement = styled.div`
    margin-bottom: 25px;
`;

const Header = ({
    headerName,
    children
}) => {
    return (
        <RootElement>
            <Parent>
                <Text isBold={true}>{headerName}</Text>
            </Parent>
            {children}
        </RootElement>
    )
}

export default Header;