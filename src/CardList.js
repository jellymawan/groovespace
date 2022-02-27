//takes in songs prop that is an array of song data, from CardList
export function MusicCard(props) {
  return (
    <div className="col">
      <div className="card">
        <div className="card">
          <div className="card-body">
            <p className="card-title">{props.song.title}</p>
            <p className="card-subtitle mb-2 text-muted">{"Artist: " + props.song.artist}</p>
            <img src={props.song.cover} className="card-img-top" alt={props.song.title} />
            <p className="card-text">{props.song.description}</p>
            <a href="#" className="btn btn-dark">Listen</a>
            <a href="#" className="btn btn-dark">Add On</a>
          </div>
        </div>
      </div>
    </div>
  )
}


//takes in songs prop that is an array of song data, to pass to MusicCard
export function CardList(props) {
  const musicCardArray = props.songs.map((song) => {
    let newMusicCard = <MusicCard key={song.title} song={song} />;
    return newMusicCard;
  });

  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <span id="music">Music</span>
          </div>
        </div>
        <div className="row" id="card-row">
          {musicCardArray}
        </div>
      </div>
    </main>
  )
}

