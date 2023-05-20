import { GreenBadge, RedBadge, YellowBadge } from "../../../Badge";

const ShowRating = ({ metacritic }: { metacritic: number }) => {
  switch (true) {
    case metacritic == null || metacritic === undefined:
      return <RedBadge label="Null" />;
    case metacritic >= 75:
      return <GreenBadge label={metacritic?.toString()} />;
    case metacritic >= 50 && metacritic < 75:
      return <YellowBadge label={metacritic?.toString()} />;
    case metacritic >= 25 && metacritic < 50:
      return <RedBadge label={metacritic?.toString()} />;
    case metacritic >= 0 && metacritic < 25:
      return <RedBadge label={metacritic?.toString()} />;

    default:
      return null;
  }
};

export default ShowRating;
