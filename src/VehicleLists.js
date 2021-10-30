import React, { useState } from 'react'
import './vehiclelists.css';

function VehicleLists({ value, handle }) {
    let imageSrcd = value.imageUrl ? value?.imageUrl : "https://fastly-production.24c.in/inspection-car/appointments/1008463509/spincar/1634417048-cu-2.jpg?w=345&amp;auto=format";
    console.log(imageSrcd);
    const handleClick = (id) => {
        handle(id)
    }
    return (
        <div className="cell small-12 medium-3 m-b-50 hvr-grow">
            <div className="grid-x background-1by2screen-cover grid-padding-y align-bottom"
                style={{ backgroundImage: `linear-gradient(130deg, rgba(0, 0, 0, 0.3) 100%, #202224 100%),url(${imageSrcd})` }}>
                <div className="cell small-offset-1 small-10  text-center ">
                    <h3 className="m-b-20 fg-light bold">{value.name}</h3>
                    <p className="font-size-small m-t-b-10 fg-light"><span>
                        {value.vehicleType}
                    </span></p>
                    <button className="button" onClick={()=>handleClick(value.id)}>Update</button>
                </div>
            </div>
        </div>
    )
}


export default VehicleLists
