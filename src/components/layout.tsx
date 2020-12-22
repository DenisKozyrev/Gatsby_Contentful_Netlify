import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";

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

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #000;
`;

const LinkWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const StyledLink = styled(Link)<any>`
  color: #fff;
  text-decoration: none;
`;

interface LayoutProps {
  children: React.ReactNode;
  backgroundColor: string;
}

const Layout = ({ children, backgroundColor }: LayoutProps) => (
  <>
    <GlobalStyle />
    <Navigation>
      <LinkWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/aboutMe">About Me</StyledLink>
        <StyledLink to="/meetupPlan">Meetup Plan</StyledLink>
        <StyledLink to="/additionalSources">Additional Sources</StyledLink>
      </LinkWrapper>
    </Navigation>
    <Wrapper backgroundColor={backgroundColor}>{children}</Wrapper>
  </>
);

export { Layout };
