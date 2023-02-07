import React from "react";
import ImageSlider from "./ImageSlider";



export default function Home(){

      const slides = [
         {url:"http://localhost:3000/download.jpeg", title:"Beach"},
         {url:"http://localhost:3000/download(1).jpeg", title:"Dogs"},
         {url:"http://localhost:3000/download(2).jpeg", title:"night"},
         {url:"http://localhost:3000/download(3).jpeg", title:"Flower"},
         {url:"http://localhost:3000/download(4).jpeg", title:"Painting"},
         {url:"http://localhost:3000/download(5).jpeg", title:"Leaves"}
      ];

      const containerSlides = {
         width:"500px",
         height:"280px",
         margin:"0 auto",
      };


 return(
    <div style={containerSlides}>
      <ImageSlider slides={slides}/>
    </div>
 )
}