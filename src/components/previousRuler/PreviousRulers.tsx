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

function getGridColumns(view: ViewOptions, deviceType: DeviceTypeEnum) {
  if (deviceType === DeviceTypeEnum.mobil)
    return { display: "flex", columns: "1fr" };

  // Tablet

  if (view === ViewOptions.list && deviceType === DeviceTypeEnum.tablet)
    return { display: "grid", columns: "1fr" };

  if (deviceType === DeviceTypeEnum.tablet)
    return { display: "grid", columns: "1fr 1fr" };

  // Desktop

  if (view === ViewOptions.list) return { display: "grid", columns: "1fr" };

  return { display: "grid", columns: "1fr 1fr 1fr" };
}

const RulerContainer = styled.div<{
  $view: ViewOptions;
  $deviceType: DeviceTypeEnum;
}>`
  display: ${({ $view, $deviceType }) =>
    getGridColumns($view, $deviceType).display};
  gap: 1rem;
  overflow-x: scroll;
  margin-right: ${({ $deviceType }) =>
    $deviceType !== DeviceTypeEnum.mobil ? "1rem" : "0"};
  grid-template-columns: ${({ $view, $deviceType }) =>
    getGridColumns($view, $deviceType).columns};
`;

const ViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
`;

const PreviousRulers = () => {
  const { previousRulers, deviceType, view } = useContext(
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
      <RulerContainer $deviceType={deviceType} $view={view}>
        {previousRulers.map((ruler: Ruler) => (
          <RulingCard key={ruler.name} ruler={ruler} />
        ))}
      </RulerContainer>
    </Container>
  );
};

export default PreviousRulers;
