import LightBoxContextProvider from '@/context/lightBoxContextProvider';
import StickyContextProvider from '@/context/stickyContextProvider'

type Props = {
  children?: React.ReactNode;
};

const NextProviders = ({ children }: Props) => (
  <LightBoxContextProvider>
    <StickyContextProvider>
      {children}
    </StickyContextProvider>
  </LightBoxContextProvider>
)

export default NextProviders
