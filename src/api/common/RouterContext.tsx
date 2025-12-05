// RouterContext.js
import { type Router, useRouter } from 'expo-router';
import React, { createContext, useContext, useEffect } from 'react';

import { setRouterInstance } from './routerService';

const RouterContext = createContext<Router | null>(null);

export const RouterProvider = ({ children }: { children: any; }) => {
  const router = useRouter();
  useEffect(() => {
    setRouterInstance(router);
  }, [router]);
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};

export const useGlobalRouter = () => useContext(RouterContext);
