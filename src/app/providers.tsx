import { GlobalStyles } from '@/styles/global';
import { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => (
  <>
    <GlobalStyles />
    {children}
  </>
);
