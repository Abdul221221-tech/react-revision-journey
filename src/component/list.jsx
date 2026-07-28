// export function ListSeries(props) {

//     return (
//         <li key={props.apidatas.id}>
//             console.log(apidatas)
//             <img
//                 src={props.apidatas.img_url}
//                 alt={props.apidatas.name}
//                 height="200"
//                 width="300"
//             />
//             <a href={props.apidatas.watch_url} target="_blank" rel="noopener noreferrer">
//                 Link
//             </a>
//             <h1>{props.apidatas.name}</h1>
//             <h3>{props.apidatas.description}</h3>
//             <p>{props.apidatas.genre}</p>
//             <p>{props.apidatas.rating}</p>
//             <p>{props.apidatas.cast}</p>
//         </li>
//     );
// }


//  destructing the s that it bcm more easy to write undesand etc
// 
// 
// export function ListSeries({ apidatas }) {
//     const {
//         name,
//         id,
//         img_url,
//         rating,
//         description,
//         cast,
//         genre,
//         watch_url
//     } = apidatas;
// 
// 
// Agar mai ListSeries({ data }) likhna chahte hu, to parent me bhi ye likhna hoga:

//<ListSeries key={apidatas.id} data={apidatas} />
export function ListSeries(props) {
    const {
        name,
        id,
        img_url,
        rating,
        description,
        cast,
        genre,
        watch_url
    } = props.apidatas;


    return (
        <li key={id}>
            <img
                src={img_url}
                alt={name}
                height="200"
                width="300"
            />

            <a
                href={watch_url}
                target="_blank"
                rel="noopener noreferrer"

style={{backgroundColor: rating>8.5 ? "blue" : "green",}}


                >
                Link
            </a>

            <h1>{name}</h1>
            <h3>{description}</h3>
            <p>{genre}</p>
            {/* <p className={rating>8.5?"superhit":"kalahit"}>{rating}</p> */}
                        <p className={` ratingstyle ${rating>8.5?"superhit":"kalahit"}`}>{rating}</p>

            {/* /className={rating>8.5?"superhit":"kalahit"} consition styling using class */}
            {/* now if we want to  common stylinf for  rating button we can alos add  more class that have same style on al rating */}
            <p>{cast}</p>
        </li>
    );
}