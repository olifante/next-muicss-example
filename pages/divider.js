import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'
import Divider from 'muicss/lib/react/divider';

class Example extends React.Component {
  render() {
    return (
      <div>
        <Head>
        <link href="//cdn.muicss.com/mui-0.9.3/css/mui.css" rel="stylesheet" type="text/css" />
        </Head>
        <div>Content 1</div>
        <Divider />
        <div>Content 2</div>
      </div>
    );
  }
}

export default Example