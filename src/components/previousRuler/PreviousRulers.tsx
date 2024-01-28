import {
  PreviousRulerProviderContext,
  ViewOptions,
} from "./PreviousRulerProvider";
import RulingCard from "../cards/rulingCard/RulingCard";
import { useContext } from "react";
import { Ruler } from "../../services/types";
import { appColors, fontWeight, H2 } from "../common/Typography";
import styled from "styled-components";
import SelectView from "./SelectView";
import { DeviceTypeEnum } from "../../constants/appConstants";

const Container = styled.div`
  margin-left: 1rem;
`;

const RulerContainer = styled.div<{
  $view: ViewOptions;
  $isMobile: DeviceTypeEnum;
}>`
  display: ${({ $isMobile }) => ($isMobile ? "flex" : "grid")};
  gap: 1rem;
  overflow-x: scroll;
  margin-right: ${({ $isMobile }) => (!$isMobile ? "1rem" : "0")};
  grid-template-columns: ${({ $view }) =>
    $view === ViewOptions.grid ? "1fr 1fr 1fr" : "1fr"};
`;

const ViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
`;

const PreviousRulers = () => {
  const { previousRulers, view, deviceType } = useContext(
    PreviousRulerProviderContext
  );

  return (
    <Container>
      <ViewContainer>
        <H2
          $weight={fontWeight.light}
          color={appColors.colorDarkGray}
          style={{ marginBottom: "16px", textAlign: "left" }}
        >
          Previous Rulings
        </H2>
        <SelectView />
      </ViewContainer>
      <RulerContainer $view={view} $isMobile={deviceType}>
        {previousRulers.map((ruler: Ruler) => (
          <RulingCard key={ruler.name} ruler={ruler} />
        ))}
      </RulerContainer>
    </Container>
  );
};

export default PreviousRulers;
