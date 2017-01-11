import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Dropdown from 'muicss/lib/react/dropdown'
import DropdownItem from 'muicss/lib/react/dropdown-item'

class Example extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link href="//cdn.muicss.com/mui-0.9.3/css/mui.css" rel="stylesheet" type="text/css" />
        </Head>
        <Dropdown color="primary" label="Dropdown">
          <DropdownItem link="#/link1">Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem>Option 3</DropdownItem>
          <DropdownItem>Option 4</DropdownItem>
        </Dropdown>
      </div>
    )
  }
}

export default Example