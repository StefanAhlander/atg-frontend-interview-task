import gameSchedule from './gameSchedule.json';
import gameData from './gameData.json';

export const useApi = (uri) => {
  if (/products/.test(uri)) {
    return gameSchedule;
  }
  if (/games/.test(uri)) {
    return gameData;
  }
};