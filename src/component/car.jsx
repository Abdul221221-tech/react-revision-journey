export default function Car(props) {
    return (
        <>
            <h1>car name: {props.name}</h1>
            <h2>car brand: {props.brand}</h2>
            <h3>car year: {props.year}</h3>
        </>
    );
}