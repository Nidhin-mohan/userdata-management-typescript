import React, { useContext, useState } from 'react';
import Card from './Card';
import Layout from './Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
import { IUser } from '../types';

interface User extends IUser {}

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const { users } = useContext(UserContext);
  const [query, setQuery] = useState<string>("");

  const handleClick = () => {
    navigate("/add");
  }

  return (
    <Layout>
      <div>
        <div className='home'>
          <div>
            <input
              className='serch-tab'
              type="text"
              placeholder='Search'
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            />
          </div>
          <div>
            <h1>{users.length}</h1>
          </div>
          <div>
            <button onClick={handleClick} className='home-btn' >Add User</button>
          </div>
        </div>
        <div className='card-display'>
          
        {users?.filter((user: IUser) =>
  user?.first_name && user.first_name.toLowerCase().includes(query)
)?.map((user: IUser) => <Card user={user} key={user.id || 0} />)}

        </div>
      </div>
    </Layout>
  )
}

export default Home;
