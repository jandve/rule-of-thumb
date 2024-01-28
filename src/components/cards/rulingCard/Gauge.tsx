import styled from "styled-components";
import { appColors, H5 } from "../../common/Typography";
import { useContext } from "react";
import { PreviousRulerProviderContext } from "../../previousRuler/PreviousRulerProvider";

type Props = {
  positiveVotes: number;
  negativeVotes: number;
};

const Container = styled.div`
  display: flex;
  height: 36px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 10;
`;

const GaugeSection = styled.div<{ $isPositive?: boolean; $isBigCard: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 1rem;
  width: ${({ $isBigCard }) => ($isBigCard ? "100px" : "200px")};
  background-color: ${({ $isPositive }) =>
    $isPositive
      ? "rgba(var(--color-green-positive), .8)"
      : "rgba(var(--color-yellow-negative), .8)"};
`;

const GaugeBar = styled.div<{ $isPositive: boolean }>`
  flex-grow: 1;
  background-color: ${({ $isPositive }) =>
    $isPositive
      ? "rgba(var(--color-green-positive), .8)"
      : "rgba(var(--color-yellow-negative), .8)"};
`;

const Gauge = ({ positiveVotes, negativeVotes }: Props) => {
  const { isBigCard } = useContext(PreviousRulerProviderContext);
  const positiveGauge = (positiveVotes * 100) / (positiveVotes + negativeVotes);
  const negativeGauge = (negativeVotes * 100) / (positiveVotes + negativeVotes);

  return (
    <Container>
      <GaugeSection className="icon-button" $isPositive $isBigCard={isBigCard}>
        <img src="/img/thumbs-up.svg" alt="thumbs up" />
        <H5 color={appColors.colorWhite}>{positiveGauge.toFixed(2)}%</H5>
      </GaugeSection>
      <GaugeBar $isPositive={positiveGauge > 49} />
      <GaugeSection className="icon-button" $isBigCard={isBigCard}>
        <H5 color={appColors.colorWhite}>{negativeGauge.toFixed(2)}%</H5>
        <img src="/img/thumbs-down.svg" alt="thumbs down" />
      </GaugeSection>
    </Container>
  );
};

export default Gauge;
