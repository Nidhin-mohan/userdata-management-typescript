import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/userContext';
import Layout from './Layout/Layout';
import { useNavigate } from 'react-router-dom';

interface AddUserProps {}

export const AddUser: React.FC<AddUserProps> = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [designation, setDesignation] = useState<string>('');
  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

  

    const newUser = {
      first_name: name,
      email: email,
      designation: designation,
    };

    setUsers([...users, newUser]);

   
    navigate('/');
  };

  return (
    <Layout>
      <div className='add-user'>
        <div className='add-image'>
          <div className='image'></div>
          <h1> {name} </h1>
        </div>
        <div className='add-details'>
          <form>
            <div className=''>
              <input
                type='text'
                name='name'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type='text'
                name='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type='text'
                name='designation'
                placeholder='Enter Designaton '
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
              <br />
              <button className='add-btn' onClick={handleClick} type='submit' value='Submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
