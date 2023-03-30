import React, { createContext, useEffect, useState } from 'react';
import ExistingUsers from '../data/userData.json';
import { IUser } from '../types';

console.log('Existing Users:', ExistingUsers);

type UserContextType = {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>({
  users: [],
  setUsers: () => {},
});

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  // const [users, setUsers] = useState<User[]>(() => {
  //   const localData = localStorage.getItem('info');
  //   console.log(localData)
  //   return localData ? JSON.parse(localData) : ExistingUsers;
  // });
  const [users, setUsers] = useState<IUser[]>([]);

  console.log(users)

  useEffect(() => {
    // debugger
    const localData = JSON.parse(localStorage.getItem('info') || "");
    if(localData?.length){
      setUsers(localData);
    }
  }, [])
  

  useEffect(() => {
    console.log(users);
    localStorage.setItem('info', JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
