import { useState } from 'react';
import { Button, DatePicker } from 'antd';
import './App.less';
import Style from './App.module.less';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={Style.appContainer}>
      <header className={Style.appHeader}>
        <p className="color-red">Hello Vite + React!</p>
        <DatePicker />
        <div className="">vite react template</div>
      </header>
    </div>
  );
}

export default App;
