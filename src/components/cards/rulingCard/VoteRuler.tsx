import styled from "styled-components";
import { appColors, fontWeight, H6 } from "../../common/Typography";
import { differenceInDays, differenceInMonths, parseISO } from "date-fns";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;
  padding-top: 16px;
`;

const VoteContainer = styled.div`
  margin: 0 30px 8px 0;
  align-self: flex-end;
  align-items: center;
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  border: 1px solid var(--color-white);
  background: var(--color-darker-background);
  color: var(--color-white);
  width: 110px;
  height: 36px;
  cursor: pointer;
`;

type Props = {
  positiveVotes: number;
  negativeVotes: number;
  lastUpdated: string;
  category: string;
};
const VoteRuler = ({ lastUpdated, category }: Props) => {
  const parsedDate = parseISO(lastUpdated);
  const daysAgo = differenceInDays(new Date(), parsedDate);
  const monthsAgo = differenceInMonths(new Date(), parsedDate);

  return (
    <Container>
      <H6
        style={{ textAlign: "right", paddingRight: "35px" }}
        $weight={fontWeight.bold}
        color={appColors.colorWhite}
      >
        {`${
          monthsAgo > 0 ? `${monthsAgo} month` : `${daysAgo} days`
        } ago in ${category}`}
      </H6>
      <VoteContainer>
        <button
          className="icon-button"
          aria-label="thumbs up"
          style={{ width: "30px", height: "30px", padding: "6px" }}
        >
          <img src="/img/thumbs-up.svg" alt="thumbs up" />
        </button>
        <button
          className="icon-button"
          aria-label="thumbs down"
          style={{ width: "30px", height: "30px", padding: "6px" }}
        >
          <img src="/img/thumbs-down.svg" alt="thumbs down" />
        </button>

        <Button>Vote Now</Button>
      </VoteContainer>
    </Container>
  );
};

export default VoteRuler;
