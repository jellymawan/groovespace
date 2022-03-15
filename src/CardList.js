import {Link} from 'react-router-dom';
import {AudioPlayer} from './AudioPlayer';
import _ from 'lodash';



//takes in songs prop that is an array of song data, from CardList
export function MusicCard(props) {


  const songsArr = props.songsArr;


  return (
    <div className="col home">
      <div className="card">
        <Link to={"/songs/"+props.song.id} className="link">
          <div className="card">
            <div className="card-body">
              <p className="card-title">{props.song.title}</p>
              <p className="card-subtitle mb-2 text-muted">{"Artist: " + props.song.artist}</p>
              <img src={props.song.cover} className="card-img-top" alt={props.song.title} />
              <p className="card-text">{props.song.description}</p>

            </div>
          </div>
        </Link>

      </div>
    </div>
  )
}


//takes in songs prop that is an array of song data, to pass to MusicCard
export function CardList(props) {

  let songsArr = props.songs;
  songsArr = _.orderBy(songsArr, "likes", 'desc')
  songsArr = songsArr.slice(0,10); //top 10 most popular songs displayed in home page


  const musicCardArray = songsArr.map((song) => {
    let newMusicCard = <MusicCard  songsArr={songsArr} key={song.id} song={song} />;
    return newMusicCard;
  });

  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <span id="music">Click to listen to our most popular songs!</span>
          </div>
        </div>
        <div className="row" id="card-row">
          {musicCardArray}
        </div>
      </div>
    </main>
  )
}

