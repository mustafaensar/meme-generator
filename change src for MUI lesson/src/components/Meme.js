import React from "react";
import "../styles/Meme.css";

function Meme(){
  const[meme, setMeme] = React.useState({
    topText:"",
    bottomText:"",
    image:"https://i.imgflip.com/3si4.jpg"
  });

  const[allImages, setAllImages] = React.useState([]);

  React.useEffect(() => {
    async function getImages(){
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllImages(data.data.memes);
    }

    getImages();
  },[]); // You dont have to write [] , this is default. If you dont write, it will be written in the background.

  function getMemeImage(){
    const randomNumber = Math.floor(Math.random() * allImages.length);
    const url = allImages[randomNumber]?.url;

    setMeme((prevState) => {
      return {...prevState, image: url}
    })

  }

  function handleChange(event){
    const {name,value} = event.target;
    
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]:value
    }))
  }

  return(
    <>
    <div className="form">
      <input
        type="text"
        placeholder="Top Text"
        className="form-input"
        name="topText"
        value={meme.toptext}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Bottom Text"
        className="form-input"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
      />

      <button className="form-btn" onClick={getMemeImage}>Get a new meme image</button>
    </div>
    <div className="meme">
      <img src={meme.image} alt="meme" className="meme-image" />
      <h2 className="meme-text top">{meme.topText}</h2>
      <h2 className="meme-text bottom">{meme.bottomText}</h2>
    </div>
    </>
  )
}

export default Meme;