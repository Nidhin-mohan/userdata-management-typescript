import React from 'react';
import { IUser } from '../types';

interface Props {
  user: IUser;
}

const Card: React.FC<Props> = ({ user }) => {
  return (
    <div className='card'>
      <div className='image'></div>
      <h1>{user.first_name}</h1>
      <h2>{user.email}</h2>
      <h2>{user.designation}</h2>
    </div>
  );
}

export default Card;
