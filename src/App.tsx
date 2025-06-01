import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='web-container'>
      <div className='web-content'>
      <h1 className='web-title'>
        Technological Singularity is coming <span className='web-title-asterisk'>*</span>
      </h1>
      <p className='web-subtitle'>LLMs are here to stay.</p>
      <div className='web-content-text'>
        <p>
          AI progress is inevitable to slow anytime soon, so for now, LLMs are here to stay.
        </p>
        <p>
          So what’s xGamma about? Just OSS.
        </p>
        <p>
          Open Source tech has powered the web for more than 3 decades, now its time to take it to the next level. 
        </p>
        <p>
          xGamma plans on creating standalone applications for the web, using experimental tech expanding into integration with AI models.
        </p>
        <p>
          thanks- team xG.
        </p>
      </div>
      <p className='web-footer'>
        <a href="https://github.com/xGamma-ai" target="_blank" rel="noopener noreferrer">Github</a> 
        &nbsp;|&nbsp;<a href="https://xgamma.in/about" target="_blank" rel="noopener noreferrer">About Us</a>
      </p>
      </div>
    </div>
  )
}

export default App
