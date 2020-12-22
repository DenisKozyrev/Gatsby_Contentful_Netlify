import React from "react";
import { PageProps, graphql } from "gatsby";
import styled from "styled-components";
import { Layout } from "../components/layout";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 140px;
`;

const Title = styled.h1`
  font-size: 80px;
  color: #1c4587;
  margin-bottom: 100px;
`;

const AdditionalSourcesItems = styled.ul`
  display: flex;
  flex-direction: column;
`;

const AdditionalSourcesItem = styled.li`
  font-size: 30px;
  text-align: start;
  margin-bottom: 30px;
`;

interface DataProps {
  contentfulAdditionalSourcesPage: {
    title: string;
    additionalSourcesitems: string[];
  };
}

const AdditionalSourcesPage: React.FC<PageProps<DataProps>> = ({
  data: {
    contentfulAdditionalSourcesPage: { title, additionalSourcesitems },
  },
}) => (
  <Layout backgroundColor="#d7e2ec">
    <Wrapper>
      <Title>{title}</Title>
      <AdditionalSourcesItems>
        {additionalSourcesitems &&
          !!additionalSourcesitems?.length &&
          additionalSourcesitems.map(({ id, itemTitle }: any) => (
            <AdditionalSourcesItem key={id}>
              <a href={itemTitle} target="_blank">{itemTitle}</a>
            </AdditionalSourcesItem>
          ))}
      </AdditionalSourcesItems>
    </Wrapper>
  </Layout>
);

export default AdditionalSourcesPage;

export const query = graphql`
  {
    contentfulAdditionalSourcesPage {
      title
      additionalSourcesitems {
        id
        itemTitle
      }
    }
  }
`;
