import { Profile } from "./user/user";
import user from '../data/user.json';
import { Statistics } from "./statistics/statistics";
import data from '../data/data.json';
import { Friends} from "./friendlist/friendlist";
import friends from '../data/friends.json';
import { Transactions } from "./transactoins/transactions";
import transactions from '../data/transactions.json'; 

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
      <Friends friends={friends} />
      <Transactions transactions={ transactions} />
    </>
  );
};
