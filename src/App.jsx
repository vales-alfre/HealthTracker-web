import React from 'react'
import AppRouters from './Routers/appRouters';
import {UserProvider } from './Routers/UserProvider';

function App  ()  {

  return (
<UserProvider>
< AppRouters />
</UserProvider>
  
  )
}

export default App;
