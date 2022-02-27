import React from 'react';
import {Link} from 'react-router-dom';


//Footer will never be changed regardless of what page user is in
export function Footer(){
    return (
        <div className="container-fluid">
            <footer>
                <div className="row">
                    <p className="col-auto m-auto"><Link to='/about'>About</Link></p>
                    <p className="col-auto m-auto"><a href="mailto:groovespace@groove.uw.edu"><span className="material-icons">email</span>groovespace@groove.uw.edu</a></p>
                    <p className="col-auto m-auto"><a href="tel:123-456-7890"><span className="material-icons">phone</span>123-456-7890</a></p>
                    <p className="col-auto m-auto">&copy; INFO 340 Group A10 2022</p>
                </div>
            </footer>
        </div>
    )
}

//About page will always stay the same
export function AboutPage(){


    return(
        <div className="about">
            <h1>About groovespace</h1>
            <p>groovespace is a unique music platform where users are able to upload their own music and collaborate with one another.</p>
            <p>Below is an example listing of a user's music:</p>
            <div className="row" id="card-row">
                <div className="col col-md-6">
                    <div className="card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title">Future Shock</p>
                                <p className="card-subtitle mb-2 text-muted">Artist: RIKO</p>
                                <img src="imgs/cover/Future Shock.jpeg" className="card-img-top" alt="Future Shock"/>
                                <p className="card-text">Hardcore electric guitar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p>With our website, a user can simply click a button to upload their own piece, view another user's piece, collaborate with the composer, or listen to another creator's music!</p>
            <p>
                Our website encourages collaboration between musicians. A unique feature on our website is the ability to duet with other users.
                Although there are many websites that allow creators to upload their music to a platform, most of these websites lack any collaborative
                features that our website promotes. Our duet feature is largely inspired from <a href="https://support.tiktok.com/en/using-tiktok/creating-videos/duets">Tik Tok’s </a>
                own duet feature.
            </p>
            <p>
                The goal of groovespace's music centered design is to encourage users to connect and engage with one another specifically through music.
                We feel that since music is a ubiquitous interest amongst most individuals, what better what is there to connect people together?
                Although our platform seems very exclusive to musicians and collaborators, we welcome all users to sign up, have a listen, and enjoy the music of
                many other creators!
            </p>
        </div>
    );
}

//Error page
export function ErrorPage(){

    console.log("Error Page");


    return (
        <h1>Error: Page not found</h1>
    );
}
