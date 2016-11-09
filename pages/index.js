import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Button from 'muicss/lib/react/button';

export default () => (
  <div>
    <Head>
      <link href="//cdn.muicss.com/mui-0.9.3/css/mui.css" rel="stylesheet" type="text/css" />
    </Head>

    <h1>Welcome</h1>
    <Button color="primary">Sample button</Button>
  </div>
)
