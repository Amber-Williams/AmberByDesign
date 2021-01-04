import React from 'react'
import Head from 'next/head'

if (typeof window !== 'undefined') {
  require('jquery')
  require('popper.js')
  require('bootstrap')
}

const Header: React.FC = () => (
  <Head>
    <title>Amber Williams Portfolio</title>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/images/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/images/favicon/favicon-16x16.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/images/favicon/apple-touch-icon.png"
    />
    <link rel="manifest" href="/images/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/images/favicon/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="theme-color" content="#ffffff" />
    <meta
      name="google-site-verification"
      content="e6S2XJHU76CL79dp9TwDvxOdd7DIGk995DxPBXvYp2c"
    />
  </Head>
)

export default Header
