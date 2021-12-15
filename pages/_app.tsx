import "~/styles/index.css"

import type { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"

import { AnimatePresence } from "framer-motion"
import Script from "next/script"
import { ReactNode } from "react"
import { NextPage } from "next"
import Layout from "~/layouts/Layout"

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const defaultGetLayout = (page: ReactNode): ReactNode => <Layout>{page}</Layout>

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultGetLayout

  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9DJT5QK59S"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9DJT5QK59S');
        `}
      </Script>

      <DefaultSeo
        title="Cozmic Creatives"
        description="Portfolio Matthew Bracke"
        twitter={{
          handle: "@CozmicMatt",
          site: "https://twitter.com/CozmicMatt",
          cardType: "summary_large_image",
        }}
      />

      <AnimatePresence exitBeforeEnter>
        {getLayout(<Component {...pageProps} key={router.route} />)}
      </AnimatePresence>
    </>
  )
}

export default MyApp
