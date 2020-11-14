import { render } from '@testing-library/react';
import { FC, ReactElement, ReactNode } from 'react';
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return children;
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
};

const customRender = (ui: any, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
