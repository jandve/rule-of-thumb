import styled from "styled-components";
import { Ruler } from "../../../services/types";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import {
  PreviousRulerProviderContext,
  ViewOptions,
} from "../../previousRuler/PreviousRulerProvider";
import { DeviceTypeEnum, IS_MOBILE } from "../../../constants/appConstants";
import Gauge from "./Gauge";
import CardInfo from "./CardInfo";

const Container = styled.div<{
  $pictureUrl?: string;
  $isBigCard?: boolean;
}>`
  min-width: 351px;
  min-height: ${({ $isBigCard }) => ($isBigCard ? "351px" : "138px")};
  background: ${({ $pictureUrl, $isBigCard }) =>
    $pictureUrl && $isBigCard ? `url(${`/img/${$pictureUrl}`})` : "none"};
  background-size: cover;
  position: relative;
  @media (min-width: ${IS_MOBILE}px) {
    width: 100%;
    height: 138px;
  }
`;

const GradientMask = styled.div<{ $width: number }>`
  position: absolute;
  top: 0;
  height: 138px;
  width: ${({ $width }) => ($width ? `${$width}px` : "0")};
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    #888 19.79%,
    #666 50%,
    rgba(51, 51, 51, 0.6) 71.88%
  ); ;
`;

type Props = {
  ruler: Ruler;
};
const RulingCard = ({ ruler }: Props) => {
  const { view, deviceType } = useContext(PreviousRulerProviderContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const [readyToView, setReadyToView] = useState(false);
  const isBigCard =
    (deviceType !== DeviceTypeEnum.mobil && view === ViewOptions.grid) ||
    deviceType === DeviceTypeEnum.mobil;

  useLayoutEffect(() => {
    setReadyToView(true);
  }, []);

  return (
    <Container
      ref={containerRef}
      $pictureUrl={ruler.picture}
      $isBigCard={isBigCard}
    >
      {deviceType !== DeviceTypeEnum.mobil && view === ViewOptions.list && (
        <div
          style={{
            width: "215px",
            height: "138px",
          }}
        >
          <img
            src={`/img/${ruler.picture}`}
            style={{
              width: "215px",
              height: "138px",
              objectFit: "cover",
            }}
            alt="ruler-pic"
          />
        </div>
      )}
      <CardInfo
        ruler={ruler}
        winner={ruler.votes.positive >= ruler.votes.negative}
      />
      <Gauge
        positiveVotes={ruler.votes.positive}
        negativeVotes={ruler.votes.negative}
      />
      {containerRef.current &&
        readyToView &&
        !deviceType &&
        view === ViewOptions.list && (
          <GradientMask $width={containerRef.current.clientWidth} />
        )}
    </Container>
  );
};

export default RulingCard;
