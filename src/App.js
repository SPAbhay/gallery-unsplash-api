import './App.css';
import CardSlider from "./components/CardSlider/CardSlider";
import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from "./components/Button/Button";

function App() {
    const clientId = "BpJ1gZS3H_L8sfQ-uv3PmozCCVNwE2XxwtzgsFLEp_c#";
    const link = "https://api.unsplash.com/search/photos?";
    const [photo, setPhoto] = useState('');
    const [searchTag, setSearchTag] = useState({value1: "table", value2: "room"});
    const [images, setImages] = useState([]);
    const [searchImages, setSearchImages] = useState([]);
    //page=1&query=office&client_id=BpJ1gZS3H_L8sfQ-uv3PmozCCVNwE2XxwtzgsFLEp_c#
    const shuffledImages = images.map(image => {
        return parseInt(image.id)
    });
    console.log(images, shuffledImages);

    // https://api.unsplash.com/search/photos?page=1&query=office&client_id=BpJ1gZS3H_L8sfQ-uv3PmozCCVNwE2XxwtzgsFLEp_c#
    const fetchAPI = async () => {
        const url = link + `query=${searchTag.value1},${searchTag.value2}` + `&client_id=` + clientId;
        const response = await (axios.get(url))
        console.log(url);
        const {data: {results}} = response;
        // console.log(results);
        setImages(results);

    }

    const setRandom = () => {
        const character = ["table", "office", "school", ""];
        const rand1 = Math.floor(Math.random() * (character.length));
        const rand2 = Math.floor(Math.random() * (character.length));

        setSearchTag({value1: character[rand1], value2: character[rand2]});
    }

    const handleChange = (e) =>{
        setPhoto(e.target.value);
    }

    const handleSubmit = async (e) =>{
        const url = link + `query=${photo}` + `&client_id=` + clientId;
        const response = await (axios.get(url))
        const {data: {results}} = response;
        setSearchImages(results);
        console.log(searchImages);
    }

    useEffect(() => {
        fetchAPI();
    }, [searchTag]);

    return (
        <>

            <section className="header">
                <h1 className="heading-main">Gallery</h1>
                <div>
                    <Button onClick={setRandom} className="button-shuffle">Shuffle</Button>
                </div>

            </section>
            {images.length > 0 && (<CardSlider images={images}/>)}



            <section className="search">
                <h1 className="heading-main">Search with Keyword</h1>
                <input onChange={handleChange} type="text" name="photo" placeholder="Search for photos..."/>
                <Button onClick={handleSubmit}>Search</Button>
                {searchImages.length > 0 && (<CardSlider images={searchImages}/>)}
            </section>
        </>
    );
}

export default App;
