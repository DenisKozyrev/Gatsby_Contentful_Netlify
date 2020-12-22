import React from "react";
import { PageProps, graphql, Link } from "gatsby";
import styled from "styled-components";
import { Layout } from "../components/layout";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 490px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 140px;
`;

const Title = styled.h1`
  font-size: 80px;
  color: #1c4587;
  margin-bottom: 40px;
`;

const SubTitle = styled.h4`
  color: #1c4587;
  font-size: 50px;
`;

interface DataProps {
  contentfulHomePage: {
    title: string;
    subTitle: string;
  };
}

const AboutMePage: React.FC<PageProps<DataProps>> = ({
  data: {
    contentfulHomePage: { title, subTitle },
  },
}) => (
  <Layout backgroundColor="#d7e2ec">
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
  </Layout>
);

export default AboutMePage;

export const query = graphql`
  {
    contentfulHomePage {
      title
      subTitle
    }
  }
`;
