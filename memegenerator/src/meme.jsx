

function Meme(){
 
    return(
      <form>
          <div className="flex gap-5 mt-10">
       <input type="text" placeholder="shut up" className=" border w-[222px] h-[34px]"/>
       <input type="text" placeholder="Get money " className="border w-[222px] h-[34px]"/>   
          </div> 
        <button className="bg-[#A818DA] text-white mt-4 w-[477px] h-[40px]"> Get new meme image</button>
      </form>
    )
}

export default Meme;