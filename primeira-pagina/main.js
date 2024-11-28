import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
   <h1> Versionando minha aplicação WEB</h1>
   <img src="https://www.radio104.com.br/wp-content/uploads/2023/05/manoel-gomes-turne-internacional-696x464-1.jpg" />
  </div>
`

setupCounter(document.querySelector('#counter'))
