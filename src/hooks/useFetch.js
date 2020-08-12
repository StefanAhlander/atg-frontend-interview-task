import gameSchedule from './gameSchedule.json';
import gameData from './gameData.json';

export const useFetch = (uri) => {
  if (/products/.test(uri)) {
    return gameSchedule;
  }
  if (/games/.test(uri)) {
    return gameData;
  }
};

/* const useFetch = (url) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error, isLoading };
}; */