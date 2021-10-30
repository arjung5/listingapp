import React, { useState, useEffect } from 'react'
import Vehicle from './Vehicle';
import VehicleLists from './VehicleLists';
import { ReactDOM } from 'react';
import PotalComponent from './PotalComponent';
function VehicleList() {
    const [list, setList] = useState([]);
    const [flag, setFlag] = useState(false);
    const [portVal, setportalValue] = useState();
    const fetchData = () => {
        fetch('https://devapi.pikpart.com/api/vehicle/models')
            .then(res => res.json())
            .then(data => setList((prev) => [...data.data]))
            .catch('Error Encountered')
    }
    useEffect(() => {
        fetchData();
    }, [])
    const handles = (id) => {
        setportalValue(id);
        setFlag(!flag);
    }
    const handlePortal = (imageUrl, id) => {
        let newList = list.map(va => {
            if (va.id === id) {
                return {...va,"imageUrl":URL.createObjectURL(imageUrl)}
            }
            else
            {
                return va
            }

        });
        
        setList(()=>newList);
        setFlag(!flag);

    }
    if (!flag) {
        return (
            <div className="grid-x grid-padding-x grid-padding-y grid-margin-y" style={{marginTop:"20px"}}>
                <div className="cell">
                    <div className="grid-x grid-padding-y grid-padding-x ">
                        {
                            list.length > 0 ? list.map((value, index) => {
                                return (
                                    <VehicleLists key={index} value={value} handle={handles} />
                                )
                            }) : <div>..loading</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <PotalComponent handle={handlePortal} valu={portVal} />
        )
    }
}

export default VehicleList
