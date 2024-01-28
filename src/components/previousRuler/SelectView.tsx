import styled from "styled-components";
import { useContext, useState } from "react";
import {
  PreviousRulerProviderContext,
  ViewOptions,
} from "./PreviousRulerProvider";
import { DeviceTypeEnum } from "../../constants/appConstants";

const Container = styled.div`
  border: 2px solid var(--color-darker-gray);
  width: 173px;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 32px;
  display: flex;
  flex-direction: column;
  width: 175px;
`;

const Btn = styled.button`
  position: relative;
  border: 2px solid var(--color-darker-gray);
  width: 175px;
  background-color: var(--color-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
`;

const Arrow = styled.img<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 250ms ease-in-out;
  margin-left: auto;
`;

const Item = styled.button<{ $lastItem?: boolean }>`
  background-color: var(--color-white);
  border: 2px solid var(--color-darker-gray);
  border-top: ${({ $lastItem }) => ($lastItem ? "none" : "")};
  height: 36px;
  cursor: pointer;
  z-index: 20;

  &:hover {
    background-color: var(--color-light-gray);
  }
`;

const SelectView = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { view, setView, deviceType } = useContext(
    PreviousRulerProviderContext
  );

  console.log(deviceType === DeviceTypeEnum.mobil);

  if (deviceType === DeviceTypeEnum.mobil) return null;

  return (
    <>
      <Btn onClick={() => setIsOpen(!isOpen)}>
        <div style={{ width: "100%", marginLeft: "auto", display: "flex" }}>
          <span style={{ marginLeft: "auto" }}>{view}</span>
          <Arrow src="/img/triangle.svg" alt="arrow" $isOpen={isOpen} />
        </div>
        {isOpen && (
          <ContentContainer>
            <Item onClick={() => setView(ViewOptions.list)}>List</Item>
            <Item $lastItem onClick={() => setView(ViewOptions.grid)}>
              Grid
            </Item>
          </ContentContainer>
        )}
      </Btn>
    </>
  );
};

export default SelectView;
