import React from 'react';


export function Footer(){
    return (
        <div className="container-fluid">
            <footer>
                <div className="row">
                    <p className="col-auto m-auto"><a href='#'>About</a></p>
                    <p className="col-auto m-auto"><a href="mailto:groovespace@groove.uw.edu"><span className="material-icons">email</span>groovespace@groove.uw.edu</a></p>
                    <p className="col-auto m-auto"><a href="tel:123-456-7890"><span className="material-icons">phone</span>123-456-7890</a></p>
                    <p className="col-auto m-auto">&copy; INFO 340 Group A10 2022</p>
                </div>
            </footer>
        </div>
    )
}

export function AboutPage(){
    return(
        <div className="about">
            <h1>About groovespace</h1>
            <p>groovespace is a unique music platform where users are able to upload their own music and collaborate with one another.</p>
            <p>With our website, a user can simply click a button to upload their own piece, view another user's piece, collaborate with the composer, or listen to another creator's music!</p>
            <p>
                Our website encourages collaboration between musicians. A unique feature on our website is the ability to duet with other users.
                Although there are many websites that allow creators to upload their music to a platform, most of these websites lack any collaborative
                features that our website promotes. Our duet feature is largely inspired from <a href="https://support.tiktok.com/en/using-tiktok/creating-videos/duets">Tik Tok’s</a>
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


