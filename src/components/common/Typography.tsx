import styled from "styled-components";
import { IS_MOBILE } from "../../constants/appConstants";

enum fontWeight {
  bold = "700",
  normal = "400",
  light = "300",
}

enum appColors {
  coloGreenPositive = "var(--color-green-positive)",
  colorYellowNegative = "var(--color-yellow-negative)",
  colorDarkBackground = "var(--color-dark-background)",
  colorDarkerBackground = "var(--color-darker-background)",
  colorDarkerGray = "var(--color-darker-gray)",
  colorDarkGray = "var(--color-dark-gray)",
  colorLightGray = "var(--color-light-gray)",
  colorLightBackground = "var(--color-light-background)",
  colorLighterBackground = "var(--color-lighter-background)",
  colorWhite = "var(--color-white)",
  colorBlack = "var(--color-black)",
}

const H1 = styled.h1<{ $weight?: fontWeight; color?: appColors }>`
  font-size: 30px;
  font-weight: ${({ $weight }) => ($weight ? $weight : fontWeight.normal)};
  color: ${({ color }) => (color ? color : appColors.colorBlack)};
  line-height: normal;
  margin: 0;
  @media (min-width: ${IS_MOBILE}px) {
    font-size: 22px;
  }
`;

const H2 = styled.h2<{ $weight?: fontWeight; color?: appColors }>`
  font-size: 24px;
  font-weight: ${({ $weight }) => ($weight ? $weight : fontWeight.normal)};
  color: ${({ color }) => (color ? color : appColors.colorBlack)};
  line-height: normal;
  margin: 0;
`;

const H5 = styled.h5<{ $weight?: fontWeight; color?: appColors }>`
  font-size: 18px;
  font-weight: ${({ $weight }) => ($weight ? $weight : fontWeight.normal)};
  color: ${({ color }) => (color ? color : appColors.colorBlack)};
  line-height: normal;
  margin: 0;
`;

const P = styled.p<{ $weight?: fontWeight; color?: appColors }>`
  font-size: 15px;
  font-weight: ${({ $weight }) => ($weight ? $weight : fontWeight.normal)};
  color: ${({ color }) => (color ? color : appColors.colorBlack)};
  line-height: normal;
  margin: 0;
`;

const H6 = styled.h6<{ $weight?: fontWeight; color?: appColors }>`
  font-size: 12px;
  font-weight: ${({ $weight }) => ($weight ? $weight : fontWeight.normal)};
  color: ${({ color }) => (color ? color : appColors.colorBlack)};
  line-height: normal;
  margin: 0;
`;

export { H1, H2, H5, H6, P, fontWeight, appColors };
