// import { useEffect } from "react";

// function PrechargementRessources() {
//     useEffect(() => {
//         prechargerImages(['url1.jpg', 'url2.jpg']);
//         prechargerPolice('MaPoliceDeCaractere');
//         prechargerFichierCSS('styles.css');
//     }, []);

//     function prechargerImages(urls) {
//         urls.forEach(url => {
//             const image = new Image();
//             image.src = url;
//         });
//     }

//     function prechargerPolice(nomPolice) {
//         document.fonts.load(`12px "${nomPolice}"`, 'text');
//     }

//     function prechargerFichierCSS(url) {
//         const link = document.createElement('link');
//         link.rel = 'stylesheet';
//         link.href = url;
//         document.head.appendChild(link);
//     }

//     return null;
// }
// export default PrechargementRessources;

import React from 'react';

function Chargement(){
    return <div>Chargement en cours....</div>
}
export default Chargement;