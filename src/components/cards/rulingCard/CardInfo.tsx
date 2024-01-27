import styled from "styled-components";
import { appColors, Caption, fontWeight, H1, P } from "../../common/Typography";
import { differenceInDays, differenceInMonths, parseISO } from "date-fns";

type Props = {
  winner: boolean;
  name: string;
  description: string;
  lastUpdated: string;
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding-right: 35px;
`;

const ThumbContainer = styled.div`
  width: 30px;
`;

const DescriptionContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardInfo = ({ winner, name, description, lastUpdated }: Props) => {
  const parsedDate = parseISO(lastUpdated);

  const daysAgo = differenceInDays(new Date(), parsedDate);
  const monthsAgo = differenceInMonths(new Date(), parsedDate);

  return (
    <Container>
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
      <DescriptionContainer>
        <H1 color={appColors.colorWhite}>{name}</H1>
        <P color={appColors.colorWhite} weight={fontWeight.normal}>
          {description}
        </P>
        <Caption
          style={{ textAlign: "right" }}
          weight={fontWeight.bold}
          color={appColors.colorWhite}
        >
          {`${
            monthsAgo > 0 ? `${monthsAgo} month` : `${daysAgo} days`
          } ago in Entertainment`}
        </Caption>
      </DescriptionContainer>
    </Container>
  );
};

export default CardInfo;
