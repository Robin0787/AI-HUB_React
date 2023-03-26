import { useEffect, useState } from 'react';
import './App.css';
import Button from './Main/Button';
import Card from './Main/Card';
import Header from './Main/Header';

function App() {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  
  const sortByDate = () => {
    const sortedData = data.sort((a, b) => new Date(b.published_in) - new Date(a.published_in));
    setData([...data,sortedData]);
  }


  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
      const value = await res.json();
      setData(value.data.tools);
    }
    loadData();
  }, []);

  return (
    <div className="App">
      <Header />
      <span onClick={sortByDate}>
        <Button >Sort By Date</Button>
      </span>
      <Card data={data} showAll={showAll} />
      <div className='text-center'>
        <span className='inline-block' onClick={() => { setShowAll(prev => !prev) }}>
          <Button>{showAll ? 'See Less' : 'See More'}</Button>
        </span>
      </div>
    </div>
  )
}

export default App;