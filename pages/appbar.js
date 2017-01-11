import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Appbar from 'muicss/lib/react/appbar'

class AppbarExample extends React.Component {
  render() {
    let s1 = { verticalAlign: 'middle' }
    let s2 = { textAlign: 'right' }

    return (
      <Appbar>
        <Head>
          <link href="//cdn.muicss.com/mui-0.9.3/css/mui.css" rel="stylesheet" type="text/css" />
        </Head>
        <table width="100%">
          <tbody>
            <tr style={s1}>
              <td className="mui--appbar-height">Left Side</td>
              <td className="mui--appbar-height" style={s2}>Right Side</td>
            </tr>
          </tbody>
        </table>
      </Appbar>
    )
  }
}

export default AppbarExample