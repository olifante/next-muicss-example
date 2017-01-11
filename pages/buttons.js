import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Button from 'muicss/lib/react/button'

class Example extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link href="//cdn.muicss.com/mui-0.9.3/css/mui.css" rel="stylesheet" type="text/css" />
        </Head>
        <div>
          <Button>button</Button>
          <Button color="primary">button</Button>
          <Button color="danger">button</Button>
          <Button color="accent">button</Button>
        </div>
        <div>
          <Button disabled={true}>button</Button>
          <Button color="primary" disabled={true}>button</Button>
          <Button color="danger" disabled={true}>button</Button>
          <Button color="accent" disabled={true}>button</Button>
        </div>
      </div>
    )
  }
}

export default Example