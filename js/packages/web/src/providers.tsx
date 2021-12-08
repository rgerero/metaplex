import {
  AccountsProvider,
  ConnectionProvider,
  StoreProvider,
  WalletProvider,
  MetaProvider,
} from '@oyster/common';
import React, { FC } from 'react';
import { ConfettiProvider } from './components/Confetti';
import { AppLayout } from './components/Layout';
import { LoaderProvider } from './components/Loader';
import { CoingeckoProvider } from './contexts/coingecko';
import { SPLTokenListProvider } from './contexts/tokenList';
import { AnchorContextProvider } from './contexts/anchorContext';

export const Providers: FC = ({ children }) => {
  return (
    <ConnectionProvider>
      <WalletProvider>
        <AccountsProvider>
          <SPLTokenListProvider>
            <CoingeckoProvider>
              <LoaderProvider>
                <AnchorContextProvider>
                  <AppLayout>{children}</AppLayout>
                </AnchorContextProvider>
              </LoaderProvider>
            </CoingeckoProvider>
          </SPLTokenListProvider>
        </AccountsProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
