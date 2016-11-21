import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

class Example extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link href="//cdn.muicss.com/mui-0.9.3/css/mui.css" rel="stylesheet" type="text/css" />
        </Head>
        <Form>
          <legend>Title</legend>
          <Input hint="Input 1" />
          <Input hint="Input 2" />
          <Textarea hint="Textarea" />
          <Button variant="raised">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Example