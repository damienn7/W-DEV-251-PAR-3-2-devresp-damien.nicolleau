import { useEffect } from "react";
import { useState } from "react";

function LoadingImages({data}){

    const [imagesCharger, setImageCharger] = useState(false);

    useEffect(() => {
        
        const loadImage = (url) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = () => resolve();
              img.onerror = () => reject();
              img.src = url;
            });
          };
      
          
        imagesL.forEach(image => {
            loadImage(image)
        })
        //   Promise.all([loadImage(image1), loadImage(image2)])
        //     .then(() => setImageCharger(true))
        //     .catch(() => console.error('Failed to load images'));  
    }, [])

    let imagesL = [];
    data.forEach(image => {
      imagesL.push(image)   
    });

    console.log(imagesL);

  if (!imagesCharger) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      {/* <img src={image1} alt="Image 1" />
      <img src={image2} alt="Image 2" /> */}
    </div>
  );
}
export default LoadingImages;