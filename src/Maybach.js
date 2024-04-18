import { useEffect } from "react";

const Maybach = ({car, setCar}) => {
    useEffect(() => {
        fetch('http://localhost:8000/cars')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setCar(data);
        })
    }, [])

    const inline = (carAntriebskonzept, carPreis) => {
        if (carAntriebskonzept !== "old"){
            return (
                <div className="inline">
                        <div className="carAntriebskonzept"><p className="carAntrieb">{carAntriebskonzept}</p></div>
                </div>
            )
        }
        if ((carAntriebskonzept === "old") && (carPreis === "")){
            return <div style={{ minHeight: '85px' }} />
        }
        if ((carAntriebskonzept === "old") && (carPreis !== "")){
            return <div style={{ minHeight: '60px' }} />
        }
    }

    return ( 
        <div className="returnMAYBACH">
        <div className="cars-map">
            {car
            .filter((car) => car.type === 'Maybach')
            .map((cars) => (
                <div className="cars-prview" key={cars.id}>
                    <h3 className="carName">{cars.name}</h3>
                    <p className="carPreis">{cars.preis}</p>
                    {inline(cars.antriebskonzept, cars.preis)}
                    <img src={`${cars.pic}`}  alt="pic" />
                </div>
            ))} 
        </div>
        </div> 
    );
}
 
export default Maybach;