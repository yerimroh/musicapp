import React, {useState, useEffect} from 'react';
import '../fonts/PFStardust.ttf';


// component: lyrics
const Lyrics = ({artist, songTitle}) => {
    
    // state that stores the lyrics
    const [songLyrics, setSongLyrics] = useState([]); // lyrics
    // runs in sideways every time the page re-renders
    useEffect(() => {
        
    // methods that retrieves the lyrics 
    const searchLyrics = async () => {

        const solenolyrics= require("solenolyrics"); 
        const lyrics = await solenolyrics.requestLyricsFor(songTitle + artist); 
        // console.log(lyrics);

        if (lyrics === undefined) {
            setSongLyrics("Not Found!");
        } else {
             setSongLyrics(lyrics);

        }

    }; // searchlyrics

        searchLyrics();
    }, [artist, songTitle]);
    



    // return scene
    return (
        <div className = "lyrics">
            <h3> {songTitle} </h3>     
            <h4 className = "artistName"> {artist}</h4>       
            <h5 className = "lyricContent" >
                {songLyrics}
            </h5>

            <div>
                <h5 className = "lyricContent"> Made by YR </h5>
            </div>
        </div>
    );
}; // lyrics

export default Lyrics;
