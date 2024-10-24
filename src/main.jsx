import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
      <div class="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p class="summary">
        You can find my thoughts here.
        <br/><br/>
        <b>And <i>pictures</i></b> of scientists!
      </p>
       <h2>Subhanfarooqkhatri</h2>
      </>
    );
