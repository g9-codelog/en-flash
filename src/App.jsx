import { useEffect, useState } from 'react';
import './App.css';
import Flash from './component/Flash';
import db from './firebase';
import { collection, getDocs } from "firebase/firestore"

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postData = collection(db, "WordsArray")
    console.log(postData)
  })

  return (
    <div className="App">
      <Flash/>
    </div>
  );
}

export default App;
