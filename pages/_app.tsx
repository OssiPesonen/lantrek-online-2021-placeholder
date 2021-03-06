import '../styles/globals.scss';

import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { LanguageProvider } from '../intl/LanguageProvider';

export default function App ({ Component, pageProps, router }: AppPropsType) {
  return (
    <LanguageProvider>
      <Component { ...pageProps } key={ router.route }/>

    </LanguageProvider>
  );
}