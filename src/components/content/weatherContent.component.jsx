import "./weatherContent.style.css";

const weatherContent = ({name, country, temp, desc, feels}) => {
    return(
        <>
        
        <div className="Container">
            <div className="left">
                <h1 align="center" style={{marginTop: '25px'}}>Weather</h1>
                <h2>{name}</h2>
                <h3>{country}</h3>
            
            <div className="temp">{temp}&#176;C</div>
            <div className="desc">{desc}</div>
            </div>

            <div className="right">
                <div className="feels">{feels}&#176;C
                    <p>feels like</p>
                </div>
                <div className="wind">{wind}
                    <p>wind speed</p>
                </div>
            </div>
        </div>

        </>
    )
}

export default weatherContent;