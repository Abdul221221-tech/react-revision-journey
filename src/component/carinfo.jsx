import Car from "./car";
import './carinfo.css';

export function Carinfo() {
    return (
        <section className="car-info-section">
            <div className="car-section-title">
                <h2>Our Featured Vehicles</h2>
                <p>Explore our exclusive collection of premium cars</p>
            </div>
            <div className="car-info-container">
                <Car
                    name="Mustang GT500"
                    brand="Ford"
                    year="2027"
                    className="car-card featured"
                />
            </div>
        </section>
    );
}