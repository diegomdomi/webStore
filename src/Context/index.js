import React from 'react';

	
const initialState = {
    users: [],
    addUsers: (newUsers) => {}
  }
  console.log(initialState)
   
  export default React.createContext(initialState)
  