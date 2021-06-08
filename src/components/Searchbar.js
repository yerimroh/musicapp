import React, {useState, useEffect} from 'react';
import Video from './Video';
import Lyrics from './Lyrics';

// component: searchBar
const Searchbar = () => {

    // some default values
    // stores the search keyword: default being an empty string 
    const [keyword, setKeyword] = useState(""); // keyword from the search bar
    const [artist, setArtist] = useState("ateez"); // stores artist name
    const [songTitle, setsongTitle] = useState("Promise"); // the finalized keyword
    const [videoId, setVideoID] = useState("");
    

     // functions
  // runs in sideways every time the page re-renders
    useEffect(async() => {
        search();
    }, [songTitle]);


    // functions
    const updateSearch = (e) => {
        setKeyword(e.target.value); // get the keyword and save it into keyword
    }; 

    const getKeyword = (e) => {
        e.preventDefault();

        // temp variables
        const query = keyword; // store up the entire search query that was put in the searchbar
        const split = query.split('-'); // split the string into artist and song title 

        setArtist(split[0]); // the artist name
        setsongTitle(split[1]); // the song title

        setKeyword(""); // clear the search bar
    };


    // function that searches using keyword and retrives the video id 
    const search = async () => {
        const query = artist + "%20"+ songTitle;
        const url = `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${query}%20audio`;
        const response = await fetch(url, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-key": "bb4a717ab6msh81eee85b2ac3b3ap18a45djsn9207984d4865",
		"x-rapidapi-host": "youtube-search-results.p.rapidapi.com"
	    }
        });


        const result = await response.json(); // convert to json
        
        // console.log(result);
        setVideoID(result.items[0].id); // set video id
    }; // search



    // scene builder
    return (
        <div>
              
            <p>
                <div>
                    <form onSubmit = {getKeyword}>
                        <input  placeholder="artist-songTitle" type="text" value = {keyword} onChange = {updateSearch}/>
                        <button className = "searchBtn" type = "submit" > Search </button>
                    </form>
                </div>
            </p>
            <p>
                <p>
                    <div className = "videoArea">
                        <Video videoId = {videoId} />
                    </div> 
                </p>
            </p>
            
                
            <div>
                <Lyrics artist = {artist} songTitle = {songTitle} />
            </div>
        </div>
    );
}; 


export default Searchbar;