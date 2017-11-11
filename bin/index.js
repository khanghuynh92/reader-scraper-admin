import { fetchInterval } from '../helpers/Cron';

const load = () => {
  // healthCheck();
  // fetch();
  fetchInterval();
};

export default load;
