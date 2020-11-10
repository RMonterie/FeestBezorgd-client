import { wrapper } from "../redux/store";

import "./globals.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
