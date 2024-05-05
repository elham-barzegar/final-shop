import "@/styles/globals.css";
import "@/styles/iconss.css";
import type { AppProps } from "next/app";
import {Layout} from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />;
      </Layout>

  )
}
