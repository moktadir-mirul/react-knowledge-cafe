import './App.css'
import ReadingCards from './components/ReadCards/ReadCards';
import { Suspense } from 'react';

function App() {

  const cardPromise = fetch('items.json').then(res => res.json())

  return (
    <>
        <h1 className='heading font-bold'>React Knowledge Cafe</h1>
        <Suspense fallback={<h1>Data Loading......</h1>}>
          <ReadingCards cardsPromise={cardPromise}></ReadingCards>
        </Suspense>
        
    </>
  )
}

export default App
