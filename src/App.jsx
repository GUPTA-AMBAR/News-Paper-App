import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NewsApp from './NewsApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <NewsApp/>
    </div>
  )
}

export default App;
