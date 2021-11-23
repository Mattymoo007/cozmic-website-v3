import "~/styles/index.css"

import type { AppProps } from "next/app"
import Layout from "~/layouts/Layout"
import { DefaultSeo } from "next-seo"

import { AnimatePresence } from "framer-motion"
import Script from "next/script"

function MyApp({ Component, pageProps, router }: AppProps) {
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

      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default MyApp
