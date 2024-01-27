import styled from "styled-components";
import { Ruler } from "../../../services/types";
import CardInfo from "./CardInfo";
import VoteRuler from "./VoteRuler";

const Container = styled.div<{ imgUrl: string }>`
  width: 351px;
  height: 351px;
  background: no-repeat url(${({ imgUrl }) => `/img/${imgUrl}`});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2rem;
`;

type Props = Ruler;
const RulingCard = ({ name, description, picture, lastUpdated }: Props) => (
  <Container imgUrl={picture}>
    <CardInfo
      name={name}
      description={description}
      winner
      lastUpdated={lastUpdated}
    />
    <VoteRuler />
  </Container>
);

export default RulingCard;
