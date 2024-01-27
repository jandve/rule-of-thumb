import styled from "styled-components";
import { appColors, H6 } from "../../common/Typography";

type Props = {
  positiveVotes: number;
  negativeVotes: number;
};

const Container = styled.div`
  display: flex;
  height: 36px;
  width: 100%;
`;

const GaugeSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 1rem;
`;

const GaugeBar = styled.div<{ isPositive: boolean }>`
  flex-grow: 1;
  background-color: ${({ isPositive }) =>
    isPositive
      ? "rgba(var(--color-green-positive), .8)"
      : "rgba(var(--color-yellow-negative), .8)"};
`;

const Gauge = ({ positiveVotes, negativeVotes }: Props) => {
  const positiveGauge = (positiveVotes * 100) / (positiveVotes + negativeVotes);
  const negativeGauge = (negativeVotes * 100) / (positiveVotes + negativeVotes);

  return (
    <Container>
      <GaugeSection className="icon-button" aria-label="thumbs up">
        <img src="/img/thumbs-up.svg" alt="thumbs up" />
        <H6 color={appColors.colorWhite}>{positiveGauge.toFixed(2)}%</H6>
      </GaugeSection>
      <GaugeBar isPositive={positiveGauge > 49} />
      <GaugeSection className="icon-button" aria-label="thumbs down">
        <H6 color={appColors.colorWhite}>{negativeGauge.toFixed(2)}%</H6>
        <img src="/img/thumbs-down.svg" alt="thumbs down" />
      </GaugeSection>
    </Container>
  );
};

export default Gauge;
