import styled from "styled-components";
import { Ruler } from "../../../services/types";
import { useContext } from "react";
import Gauge from "./Gauge";
import CardInfo from "./CardInfo";
import {
  PreviousRulerProviderContext,
  ViewOptions,
} from "../../previousRuler/PreviousRulerProvider";
import { DeviceTypeEnum } from "../../../constants/appConstants";

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
`;

const GradientMask = styled.div`
  position: absolute;
  top: 0;
  height: 138px;
  width: 100%;
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
  const { view, deviceType, isBigCard } = useContext(
    PreviousRulerProviderContext
  );
  const isShowGradientMaskVisible = !isBigCard && view === ViewOptions.list;

  return (
    <Container $pictureUrl={ruler.picture} $isBigCard={isBigCard}>
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
      {isShowGradientMaskVisible && view === ViewOptions.list && (
        <GradientMask />
      )}
    </Container>
  );
};

export default RulingCard;
