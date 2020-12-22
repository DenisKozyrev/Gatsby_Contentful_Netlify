import React from "react";
import { PageProps, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import styled from "styled-components";
import { Layout } from "../components/layout";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 900px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 140px;
`;

const SubTitle = styled.h4`
  max-width: 600px;
  color: #1c4587;
  font-size: 70px;
`;

const StyledImage = styled(Img)<any>`
  width: 100%;
  margin-bottom: 100px;
`;

interface DataProps {
  contentfulHomePage: {
    image: { fluid: FluidObject | FluidObject[] };
    subTitle: string;
  };
}

const HomePage: React.FC<PageProps<DataProps>> = ({
  data: {
    contentfulHomePage: { image, subTitle },
  },
}) => (
  <Layout backgroundColor="#d7e2ec">
    <Wrapper>
      <StyledImage fluid={image.fluid} />
      <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
  </Layout>
);

export default HomePage;

export const query = graphql`
  {
    contentfulHomePage {
      title
      subTitle
      image {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
