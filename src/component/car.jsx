import './car.css';

export default function Car(props) {
    return (
        <div className={`car-card ${props.className || ''}`}>
            <h1>{props.name}</h1>
            <div className="car-detail">
                <span className="car-detail-label">Brand</span>
                <span className="car-detail-value">{props.brand}</span>
            </div>
            <div className="car-detail">
                <span className="car-detail-label">Year</span>
                <span className="car-detail-value">{props.year}</span>
            </div>
        </div>
    );
}