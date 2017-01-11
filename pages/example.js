import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Appbar from 'muicss/lib/react/appbar'
import Button from 'muicss/lib/react/button'
import Container from 'muicss/lib/react/container'

class Example extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link href="//cdn.muicss.com/mui-0.9.3/css/mui.css" rel="stylesheet" type="text/css" />
        </Head>
        <Appbar></Appbar>
        <Container>
          <Button color="primary">button</Button>
        </Container>
      </div>
    )
  }
}

export default Example