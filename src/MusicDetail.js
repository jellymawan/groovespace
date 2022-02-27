import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import MUSIC from './data/music-data.json';
import _ from 'lodash';


export function MusicDetail(props){

    const ID = useParams().songID;

    console.log(ID);
    console.log(props);


    let songID = _.find(props, {id: ID})

    console.log(songID);

    return(
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img src={props.songs.img} className="card-img-top img-size" alt="..." />
                    </div>
                    <div className="col">
                        <p>ahhh</p>

                    </div>
                </div>
            </div>
        </main>
    );
}