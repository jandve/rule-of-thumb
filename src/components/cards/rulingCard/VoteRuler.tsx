import styled from "styled-components";
import { appColors, fontWeight, H6 } from "../../common/Typography";
import { differenceInDays, differenceInMonths, parseISO } from "date-fns";
import { useContext, useState } from "react";
import { PreviousRulerProviderContext } from "../../previousRuler/PreviousRulerProvider";
import { Ruler } from "../../../services/types";

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

const VoteNowButton = styled.button<{ $disabled: boolean }>`
  border: 1px solid var(--color-white);
  background: ${({ $disabled }) =>
    $disabled
      ? "var(--color-darker-background-disabled)"
      : "var(--color-darker-background)"};
  color: var(--color-white);
  width: 110px;
  height: 36px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")}; ;
`;

const ThumbBtn = styled.button<{ $isSelected: boolean }>`
  width: 30px;
  height: 30px;
  padding: 6px;
  border: ${({ $isSelected }) =>
    `2px solid ${$isSelected ? "var(--color-white)" : "transparent"}`};
`;

enum VoteIsOptions {
  positive = "positive",
  negative = "negative",
  notReady = "notReady",
}

type Props = {
  ruler: Ruler;
};
const VoteRuler = ({ ruler }: Props) => {
  const { postAVote } = useContext(PreviousRulerProviderContext);
  const parsedDate = parseISO(ruler.lastUpdated);
  const daysAgo = differenceInDays(new Date(), parsedDate);
  const monthsAgo = differenceInMonths(new Date(), parsedDate);
  const [voteIs, setVoteIs] = useState<VoteIsOptions>(VoteIsOptions.notReady);
  const [voteCompleted, setVoteCompleted] = useState<boolean>(false);

  const onVote = () => {
    if (voteCompleted) {
      setVoteCompleted(false);
      setVoteIs(VoteIsOptions.notReady);
    } else {
      setVoteCompleted(true);
      postAVote(ruler);
    }
  };

  return (
    <Container>
      <H6
        style={{ textAlign: "right", paddingRight: "35px" }}
        $weight={fontWeight.bold}
        color={appColors.colorWhite}
      >
        {!voteCompleted
          ? `${
              monthsAgo > 0 ? `${monthsAgo} month` : `${daysAgo} days`
            } ago in ${ruler.category}`
          : "Thanks you for voting!"}
        {}
      </H6>
      <VoteContainer>
        {!voteCompleted && (
          <>
            <ThumbBtn
              $isSelected={voteIs === VoteIsOptions.positive}
              className="icon-button"
              aria-label="thumbs up"
              onClick={() => setVoteIs(VoteIsOptions.positive)}
            >
              <img src="/img/thumbs-up.svg" alt="thumbs up" />
            </ThumbBtn>
            <ThumbBtn
              $isSelected={voteIs === VoteIsOptions.negative}
              className="icon-button"
              aria-label="thumbs down"
              onClick={() => setVoteIs(VoteIsOptions.negative)}
            >
              <img src="/img/thumbs-down.svg" alt="thumbs down" />
            </ThumbBtn>
          </>
        )}

        <VoteNowButton
          disabled={voteIs === VoteIsOptions.notReady && !voteCompleted}
          $disabled={voteIs === VoteIsOptions.notReady && !voteCompleted}
          onClick={onVote}
        >
          {voteCompleted ? "Vote Again" : "Vote Now"}
        </VoteNowButton>
      </VoteContainer>
    </Container>
  );
};

export default VoteRuler;
