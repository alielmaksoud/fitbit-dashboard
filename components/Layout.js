import Head from 'next/head'

import colors from '../styles/colors'
import spacing from '../styles/spacing'
import typography from '../styles/typography'

export default ({ header, children, title = 'Next.js / Express App' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>

    <div className="outer-container">
      {header && <header>{header}</header>}
      <div className="container main">
        {children}
      </div>
      <footer>
        <div className="container">
          Created by <a href="https://github.com/nickjvm">@nickjvm</a>
        </div>
      </footer>
    </div>
    <style jsx global>{`
      html { font-size: 62.5%; }
      html, body { height: 100%; }
      *, *:before, *:after {
        box-sizing: border-box;
      }
      body {
        font-family: 'Helvetica Neue', arial, sans-serif;
        font-size: 1.6rem;
        background: ${colors.background};
        color: ${colors.text};
        margin: 0;
      }
      header {
        padding: ${spacing.large};
        background: ${colors.grey};
        margin-bottom: ${spacing.large};
      }
      h1, h2, h3, h4 {
        margin: 0;
      }
      h3 {
        font-size: ${typography.text.medium}
      }
      footer {
        background: ${colors.white};
        padding: ${spacing.large};
      }
      #__next, #__next > div {
        height: 100%;
      }
      .outer-container {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .main {
        flex-grow: 1;
      }
      .container {
        width: 100%;
        max-width: 1024px;
        padding: 0 ${spacing.small};
        margin: auto;
      }
      @media(min-width: 1280px) {
        .container {
          padding: 0;
        }
      }
      table {
        border-collapse: collapse;
        width: 100%;
      }
      td, th {
        padding: 15px 5px;
        border: 1px solid ${colors.border};
        border-width: 0 0 1px 0;
      }
      tr:last-child td {
        border-bottom-width: 0;
      }
      th {
        text-align: left;
        font-weight: normal;
        color: ${colors.darkGrey};
        font-size: ${typography.text.small};
        text-transform: uppercase;
        border-bottom: 2px solid ${colors.border};
      }
      tfoot td {
        border-width: 2px 0 0 0;
      }
      svg[class*=icon--]:not(:last-child) {
        margin-right: ${spacing.small}
      }
      svg[class*=icon--]:not(:first-child) {
        margin-left: ${spacing.small}
      }
      .icon--small {
        width: 20px;
        height: 20px;
      }
      .icon--text-color path {
        fill: ${colors.text}
      }
    `}</style>
  </div>
)
