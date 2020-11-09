import { useState } from 'react';

export const useAuth = auth => {
    const [user_name,first_name,last_name,utype] = useState('');
    return [user_name,first_name,last_name,utype];
  };