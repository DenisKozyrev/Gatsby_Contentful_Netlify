// import React from "react";
// import { PageProps, graphql, Link } from "gatsby";
// import styled from "styled-components";
// import Img, { FluidObject } from "gatsby-image";
// import { Layout } from "../components/layout";

// const Wrapper = styled.div`
//   width: 100%;
//   display: flex;
//   max-width: 1000px;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   margin-top: 140px;
// `;

// const InfoWrapper = styled.div`
//   width: 100%;
//   max-width: 700px;
//   display: flex;
// `;

// const Title = styled.h1`
//   font-size: 80px;
//   color: #1c4587;
//   margin-bottom: 100px;
// `;

// const UserImage = styled(Img)<any>`
//   width: 100%;
//   max-width: 280px;
// `;

// const UserInfo = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const UserName = styled.p`
//   font-size: 50px;
//   margin-bottom: 20px;
// `;

// const UserPosition = styled.p`
//   font-size: 30px;
//   margin-bottom: 40px;
//   max-width: 300px;
//   text-align: start;
// `;

// const SocialInfoWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   max-width: 300px;
// `;

// const SocialInfo = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const SocialIcon = styled(Img)<any>`
//   width: 100%;
//   max-width: 38px;
//   margin-right: 10px;
// `;

// const SocialLink = styled.a`
//   font-size: 30px;
// `;

// const SocialText = styled.p`
//   font-size: 30px;
// `;

// interface DataProps {
//   contentfulAboutMePage: {
//     title: string;
//     name: string;
//     position: string;
//     socialInfo: SocialInfo[];
//     userImage: { fluid: FluidObject | FluidObject[] };
//   };
// }

// interface SocialInfo {
//   id: string;
//   isLink: boolean;
//   socialIcon: { fluid: FluidObject | FluidObject[] };
//   socialText: string;
//   socialLink: string;
// }

// const AboutMePage: React.FC<PageProps<DataProps>> = ({
//   data: {
//     contentfulAboutMePage: { title, name, position, userImage, socialInfo },
//   },
// }) => (
//   <Layout backgroundColor="#d7e2ec">
//     <Wrapper>
//       <Title>{title}</Title>
//       <InfoWrapper>
//         <UserImage fluid={userImage.fluid} />
//         <UserInfo>
//           <UserName>{name}</UserName>
//           <UserPosition>{position}</UserPosition>
//           <SocialInfoWrapper>
//             {socialInfo &&
//               !!socialInfo?.length &&
//               socialInfo.map(
//                 ({
//                   id,
//                   socialIcon,
//                   isLink,
//                   socialLink,
//                   socialText,
//                 }: SocialInfo) => (
//                   <SocialInfo key={id}>
//                     <SocialIcon fluid={socialIcon?.fluid} />
//                     {isLink ? (
//                       <SocialLink href={socialLink} target="_blank">
//                         {socialText}
//                       </SocialLink>
//                     ) : (
//                       <SocialText>{socialText}</SocialText>
//                     )}
//                   </SocialInfo>
//                 )
//               )}
//           </SocialInfoWrapper>
//         </UserInfo>
//       </InfoWrapper>
//     </Wrapper>
//   </Layout>
// );

// export default AboutMePage;

// export const query = graphql`
//   {
//     contentfulAboutMePage {
//       title
//       name
//       position
//       socialInfo {
//         id
//         isLink
//         socialLink
//         socialText
//         socialIcon {
//           fluid(quality: 100) {
//             ...GatsbyContentfulFluid
//           }
//         }
//       }
//       userImage {
//         fluid(quality: 100) {
//           ...GatsbyContentfulFluid
//         }
//       }
//     }
//   }
// `;
