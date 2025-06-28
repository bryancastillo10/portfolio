'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from '@/lib/redux/store';

import ThemeProvider from './ThemeProvider';

interface ProviderProps {
  children: React.ReactNode;
}

const persistor = persistStore(store);
const Providers = ({ children }: ProviderProps) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>{children}</ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default Providers;
