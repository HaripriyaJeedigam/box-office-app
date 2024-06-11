import { useQuery } from "@tanstack/react-query";
import { useStarredShows } from "../lib/useStarredShows";
import { getShowByIds} from "../api/tvmaze";
import ShowGrid from '../components/shows/ShowGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();
  
  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () => getShowByIds(starredShowsIds).then(result => 
      result.map(show => ({ show }))
    ),
    refetchOnWindowFocus: false,
    enabled: starredShowsIds.length > 0, // Only enable query if there are starred shows
  });

  if (starredShowsIds.length === 0) {
    return <div>No shows were starred</div>;
  }

  if (starredShowsError) {
    return <div>Error occurred: {starredShowsError.message}</div>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  return <div>Shows are loading</div>;
};

export default Starred;
