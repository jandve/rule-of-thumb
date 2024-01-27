import styled from "styled-components";
import Gauge from "./Gauge";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const VoteContainer = styled.div`
  margin: 0 30px 8px 0;
  width: 50%;
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
`;

const VoteRuler = () => (
  <Container>
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
    <Gauge positiveVotes={237} negativeVotes={894} />
  </Container>
);

export default VoteRuler;
