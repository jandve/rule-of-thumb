import { PreviousRulingResponse, Ruler, Votes } from "./types";

const getPassRulings = async (): Promise<
  PreviousRulingResponse | undefined
> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/characters`);
    return (await response.json()) as Ruler[];
  } catch (e: unknown) {
    if (e instanceof TypeError) {
      throw new Error(
        `something went wrong fetching rulers with message: ${e.message}`
      );
    } else console.log("something went wrong fetching rulers");
  }
};

const postARulingVote = async (rulerId: number, votes: Votes) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/characters/${rulerId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ votes }),
      }
    );
    return await response.json();
  } catch (e: unknown) {
    if (e instanceof TypeError) {
      throw new Error(
        `something went wrong fetching rulers with message: ${e.message}`
      );
    } else console.log("something went wrong fetching rulers");
  }
};

export { getPassRulings, postARulingVote };
