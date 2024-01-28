import styled from "styled-components";
import { appColors, H1, P } from "../../common/Typography";
import { useContext } from "react";
import { PreviousRulerProviderContext } from "../../previousRuler/PreviousRulerProvider";
import VoteRuler from "./VoteRuler";
import { Ruler } from "../../../services/types";

type Props = {
  winner: boolean;
  ruler: Ruler;
};

const Container = styled.div<{ $isBigCard?: boolean }>`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  top: ${({ $isBigCard }) => ($isBigCard ? "40%" : "0")};
`;

const ThumbContainer = styled.div`
  width: 30px;
`;

const DescriptionContainer = styled.div<{ $isBigCard: boolean }>`
  text-align: left;
  // display: flex;
  // flex-direction: column;
  // gap: 1rem;
  // margin-left: ${({ $isBigCard }) => ($isBigCard ? "0px" : "150px")};
`;

const Paragraph = styled(P)`
  margin: 0;
  line-height: 1.2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
`;

const TruncatedText = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardInfo = ({ winner, ruler }: Props) => {
  const { isBigCard } = useContext(PreviousRulerProviderContext);
  return (
    <Container $isBigCard={isBigCard}>
      <ThumbContainer>
        <div
          className="icon-button"
          style={{ width: "18px", height: "18px", padding: "6px" }}
          aria-label={`thumbs ${winner ? "up" : "down"}`}
        >
          <img
            src={`/img/thumbs-${winner ? "up" : "down"}.svg`}
            alt={`thumbs ${winner ? "up" : "down"}`}
          />
        </div>
      </ThumbContainer>
      <div style={{ width: "316px" }}>
        <DescriptionContainer $isBigCard={isBigCard}>
          <H1 color={appColors.colorWhite}>{ruler.name}</H1>
          <div
            style={{ height: "36px", overflow: "hidden", position: "relative" }}
          >
            <Paragraph color={appColors.colorWhite}>
              <TruncatedText>{ruler.description}</TruncatedText>
            </Paragraph>
          </div>
        </DescriptionContainer>
        <VoteRuler
          positiveVotes={ruler.votes.positive}
          negativeVotes={ruler.votes.negative}
          lastUpdated={ruler.lastUpdated}
          category={ruler.category}
        />
      </div>
      {/*<VoteRuler*/}
      {/*  positiveVotes={ruler.votes.positive}*/}
      {/*  negativeVotes={ruler.votes.negative}*/}
      {/*  lastUpdated={ruler.lastUpdated}*/}
      {/*  category={ruler.category}*/}
      {/*/>*/}
    </Container>
  );
};

export default CardInfo;
