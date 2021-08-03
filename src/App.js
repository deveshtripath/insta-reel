import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import VideoCard from './VideoCard';

function App() {

  const [reels, setReels] = useState([])

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot =>(
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);


  return (
    <div className="app">
      <div className="app__top">
          <img src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg" alt="" className="app__logo"/>
          <h1>Reels</h1>
      </div>
      <div className="app__videos">
      {reels.map(({channel,avatarSrc,song,likes,shares,url}) =>(

      
        <VideoCard
          channel={channel}
          avatarSrc={avatarSrc}
          song={song}
          url={url}
          likes={likes}
          shares={shares}


        />
        ))}

      </div>
    </div>
  );
}

export default App;
