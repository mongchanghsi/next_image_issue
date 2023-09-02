import { Toaster } from "react-hot-toast";
import BaseFont from "@/styles/font";
import GlobalStyle from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${BaseFont.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  );
}
