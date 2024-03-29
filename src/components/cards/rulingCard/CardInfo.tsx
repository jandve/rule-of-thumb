import styled from "styled-components";
import { appColors, H1, P } from "../../common/Typography";
import { useContext } from "react";
import VoteRuler from "./VoteRuler";
import { Ruler } from "../../../services/types";
import { PreviousRulerProviderContext } from "../../previousRuler/PreviousRulerProvider";

type Props = {
  winner: boolean;
  ruler: Ruler;
};

const Container = styled.div<{ $isBigCard?: boolean }>`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  top: ${({ $isBigCard }) => ($isBigCard ? "40%" : "0")};
  width: 100%;
`;

const ThumbContainer = styled.div`
  width: 30px;
`;

const DescriptionContainer = styled.div<{ $isBigCard: boolean }>`
  text-align: left;
`;

const DescriptionWrapper = styled.div<{ $isBigCard: boolean }>`
  flex-grow: 1;
  margin: ${({ $isBigCard }) => ($isBigCard ? "0" : "5px 35px 15px 150px")};
  z-index: 10;
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
      <DescriptionWrapper $isBigCard={isBigCard}>
        <DescriptionContainer $isBigCard={isBigCard}>
          <H1
            color={appColors.colorWhite}
            style={{ marginBottom: `${isBigCard ? "0" : "20px"}` }}
          >
            {ruler.name}
          </H1>
          <div
            style={{ height: "36px", overflow: "hidden", position: "relative" }}
          >
            <Paragraph color={appColors.colorWhite}>
              <TruncatedText>{ruler.description}</TruncatedText>
            </Paragraph>
          </div>
        </DescriptionContainer>
        {isBigCard && <VoteRuler ruler={ruler} />}
      </DescriptionWrapper>
      {!isBigCard && <VoteRuler ruler={ruler} />}
    </Container>
  );
};

export default CardInfo;
