import { useState } from 'react'
import { Button, Input } from 'antd'
import { Link } from "react-router-dom";
import Counter from '@/features/counter/Counter'
import logo from './logo.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-red-300'>Hello Vite + React!</p>
        <p>
          <Button type='primary' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <Counter />
        <div className='mt-5'>
          <nav
            style={{
              borderBottom: "solid 3px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default App
