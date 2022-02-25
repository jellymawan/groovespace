//takes in songs prop that is an array of song data, from CardList
export function MusicCard(props) {

  return (
    <div class="col">
      <a href={props.title + '.html'}>
        <div class="card">
          <div class="card">
            <div class="card-body">
              <p class="card-title">{props.title}</p>
              <p class="card-subtitle mb-2 text-muted">Artist: {props.artist}</p>
              <img src={"img/" + props.title + ".jpeg"} class="card-img-top" alt={props.title} />
              <p class="card-text">{props.description}</p>
              <a href="#" class="btn btn-dark">Listen</a>
              <a href="#" class="btn btn-dark">Add On</a>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}


//takes in songs prop that is an array of song data, to pass to MusicCard
export default function CardList(props) {
  const musicCardArray = props.map((song) => {
    let newMusicCard = <MusicCard key={song.title} songs={props} />;
    return newMusicCard;
  });

  return (
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <span id="music">Music</span>
          </div>
        </div>
        <div class="row" id="card-row">
          {musicCardArray}
        </div>
      </div>
    </main>
  )
}

