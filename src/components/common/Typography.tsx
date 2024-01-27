import styled from "styled-components";

enum fontWeight {
  bold = "700",
  normal = "400",
  light = "200",
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

const H1 = styled.h1<{ weight?: fontWeight; color?: appColors }>`
  font-size: 30px;
  font-weight: ${({ weight }) => (weight ? weight : fontWeight.normal)};
  color: ${({ color }) => (color ? color : appColors.colorBlack)};
  line-height: normal;
  margin: 0;
`;

const H6 = styled.h1<{ weight?: fontWeight; color?: appColors }>`
  font-size: 18px;
  font-weight: ${({ weight }) => (weight ? weight : fontWeight.normal)};
  color: ${({ color }) => (color ? color : appColors.colorBlack)};
  line-height: normal;
  margin: 0;
`;

const P = styled.p<{ weight?: fontWeight; color?: appColors }>`
  font-size: 15px;
  font-weight: ${({ weight }) => (weight ? weight : fontWeight.normal)};
  color: ${({ color }) => (color ? color : appColors.colorBlack)};
  line-height: normal;
  margin: 0;
`;

const Caption = styled.caption<{ weight?: fontWeight; color?: appColors }>`
  font-size: 12px;
  font-weight: ${({ weight }) => (weight ? weight : fontWeight.normal)};
  color: ${({ color }) => (color ? color : appColors.colorBlack)};
  line-height: normal;
  margin: 0;
`;

export { H1, H6, P, Caption, fontWeight, appColors };
