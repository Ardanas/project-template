import { useState } from 'react';
import { Button, DatePicker } from 'antd';
import './App.less';
import Style from './App.module.less';
import ExchangeRates from './components/ExchangeRates';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={Style.appContainer}>
      <ExchangeRates />
      <header className={Style.appHeader}>
        <p className="color-red">Hello Vite + React!</p>
        <DatePicker />
        <p>
          <Button type="primary" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
