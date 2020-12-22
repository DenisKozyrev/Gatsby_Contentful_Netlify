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

const PlanItems = styled.ul`
  display: flex;
  flex-direction: column;
`;

const PlanItem = styled.li`
  font-size: 30px;
  text-align: start;
  margin-bottom: 10px;
`;

interface DataProps {
  contentfulMeetupPlanPage: {
    title: string;
    planItem: string[];
  };
}

const MeetupPlanPage: React.FC<PageProps<DataProps>> = ({
  data: {
    contentfulMeetupPlanPage: { title, planItem },
  },
}) => (
  <Layout backgroundColor="#d7e2ec">
    <Wrapper>
      <Title>{title}</Title>
      <PlanItems>
        {planItem &&
          !!planItem?.length &&
          planItem.map(({ id, itemTitle }: any) => (
            <PlanItem key={id}>{itemTitle}</PlanItem>
          ))}
      </PlanItems>
    </Wrapper>
  </Layout>
);

export default MeetupPlanPage;

export const query = graphql`
  {
    contentfulMeetupPlanPage {
      title
      planItem {
        id
        itemTitle
      }
    }
  }
`;
