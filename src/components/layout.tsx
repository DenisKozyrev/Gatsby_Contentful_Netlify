import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${({ backgroundColor }: { backgroundColor: string }) =>
    backgroundColor ? backgroundColor : ""};
`;

interface LayoutProps {
  children: React.ReactNode;
  backgroundColor: string;
}

const Layout = ({ children, backgroundColor }: LayoutProps) => (
  <>
    <GlobalStyle />
    <Wrapper backgroundColor={backgroundColor}>{children}</Wrapper>
  </>
);

export { Layout };
