import  apidata from "../Api/Seriesdata.json";
import { ListSeries } from "./list.jsx";
// export function Card(){
//     return(
//         <li>
//             <img src={apidata[0].img_url} alt={apidata[0].name}  height="200" width="300"/>
//              <a href={apidata[0].watch_url} target="_blank" rel="noopener noreferrer">Link</a>

//             <h1>{apidata[0].name}</h1>
//             <h3>{apidata[0].description}</h3>
            
//             <p>{apidata[0].genre}</p>
//             <p>{apidata[0].rating}</p>
//             <p>{apidata[0].cast}</p>

//         </li>
//     )
// }
// export  function Diffcard(){
//     return(
//         <ul>
//             {
//                 apidata.map((apidatas)=>{
//  // apidata  isi naam se upar impot kiya hiabilsiye yha y likh hai

//                      return(
//         <li key={apidatas.id}>
//           <img src={apidatas.img_url} alt={apidatas.name} height="200" width="300"/>
//              <a href={apidatas.watch_url} target="_blank" rel="noopener noreferrer">Link</a>

//             <h1>{apidatas.name}</h1>
//             <h3>{apidatas.description}</h3>
              
//             <p>{apidatas.genre}</p>
//             <p>{apidatas.rating}</p>
//             <p>{apidatas.cast}</p>

//         </li>
//     )
//                 })
//             }
//         </ul>
//     )
// }
export function Diffcard(){
    return(
        <ul>
            {
                apidata.map((apidatas) => {
                    return (
                        <ListSeries key={apidatas.id} apidatas={apidatas} />
                    )
                })
            }
        </ul>
    )
}

