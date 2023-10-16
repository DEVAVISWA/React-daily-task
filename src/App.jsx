import React from 'react'
import Datas from './components/datas'
import './css/style.css'

function App({ data }) {
  // console.log(data)
  return (
    <div id='gradient'>
      {
        data.map(datas =>
          <Datas key={datas.id} datas={datas} />
        )
      }
    </div>
  )
}

export default App