import React from 'react'
import Head from 'next/head'
const Meta = ({description,title,keywords}) => {
  return (
    <div>
                <Head>
    <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords'  content={keywords} />
        <meta name='author' content='Emir Tetik' />
        <link  rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#000000"/>
        <title>{title}</title>
    </Head>
    </div>
  )
}

export default Meta