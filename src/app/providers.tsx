import CartContextProvider from '@/context/cartContextProvider';
import LightBoxContextProvider from '@/context/lightBoxContextProvider';
import StickyContextProvider from '@/context/stickyContextProvider'

type Props = {
  children?: React.ReactNode;
};

const NextProviders = ({ children }: Props) => (
  <CartContextProvider>
    <LightBoxContextProvider>
      <StickyContextProvider>
        {children}
      </StickyContextProvider>
    </LightBoxContextProvider>
  </CartContextProvider>
)

export default NextProviders
