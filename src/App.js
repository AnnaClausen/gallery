import { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';

const images = [
  'https://picsum.photos/id/10/200/200',
  'https://picsum.photos/id/22/200/200',
  'https://picsum.photos/id/32/200/200',
  'https://picsum.photos/id/38/200/200',
  'https://picsum.photos/id/57/200/200',
  'https://picsum.photos/id/59/200/200',
  'https://picsum.photos/id/77/200/200',
  'https://picsum.photos/id/78/200/200',
  'https://picsum.photos/id/82/200/200'

]

function App() {
  const [items, setItems] = useState(images);
  return (
    <>
    <Navbar />
    <div class="container text-center mt-5">
      <button className='btn btn-warning' onClick={() => setItems(['https://picsum.photos/id/82/200/200', ...items])}>+Add</button>
      <h1>Gallery</h1>
      <div className="row">
        {items.map((image) => <Card src={image} />)}
      </div>
    </div>
    </>
  );
}

export default App;

