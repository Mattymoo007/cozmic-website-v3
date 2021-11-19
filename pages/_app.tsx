import "~/styles/index.scss"

import type { AppProps } from "next/app"
import Layout from "~/layouts/Layout"
import { useEffect } from "react"
import { initColorScheme } from "~/utils/color-scheme"
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initColorScheme()
  }, [])

  return (
    <Layout>
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

      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
