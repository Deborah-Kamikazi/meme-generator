 import { useState } from 'react'
import memeData from './memeData'
function Meme(){
 // eslint-disable-next-line no-undef

 const [meme, setMeme] = useState({
   topText:"",
   bottomText:"",
   randomImage:"https://i.imgflip.com/28j0te.jpg"
 })
//  const[allMemeImages,setAllmemesImage] = useState(memeData)

  function getMeme(){
  const memesArray = memeData.data.memes
  const randomNumber = Math.floor(Math.random() *memesArray.length)
  const url = memesArray[randomNumber].url
   setMeme(prevMeme=> ({
    ...prevMeme,
     randomImage:url
   }))
  }
  
    return(
      <div>
          <div className="flex gap-5 mt-10">
       <input type="text" placeholder="shut up" className=" border w-[222px] h-[34px]"/>
       <input type="text" placeholder="Get money " className="border w-[222px] h-[34px]"/>   
          </div> 
        <button onClick={getMeme} className="bg-[#A818DA] text-white mt-4 w-[477px] h-[40px]"> Get new meme image</button>
        <img src={meme.randomImage} alt=""className='w-[477px] mt-3 h-[268]'/>

      </div>
       
    )
}

export default Meme;