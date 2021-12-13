import React from "react";
import styled from "styled-components";

const StyledHeaderTemplate = styled.div`
    border: 1px solid salmon;
    width: 100vw;
    height: 44px;
    padding: 0px 18px;
    position: fixed;
    z-index: 100;
    display: flex;
    align-items: center;
`;

const Header = () => {
    return (
        <StyledHeaderTemplate>
            test
        </StyledHeaderTemplate>
    )
}

export default Header;