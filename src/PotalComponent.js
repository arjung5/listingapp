import React, { useState } from 'react';
import './vehiclelists.css';
import ReactDOM from 'react-dom';
function PotalComponent({ handle, valu}) {
    const [selectedImage, setSelectedImage] = useState('/assest/download.png');
    const handleSelection=(event)=>{
        setSelectedImage( URL.createObjectURL(event.target.files[0]));
    }
       return ReactDOM.createPortal(
        <div>
            <div className="grid-x background-fullscreen-cover"
                style={{ backgroundImage: "linear-gradient(180deg, rgba(2,2,2,1) 0%, rgba(0,0,0,0.4) 0%),url(https://pikpart.com/static/media/banner.068660b6.jpg)" }}>
                <div className="cell  align-self-middle p-t-90 p-b-60">
                    <div className="grid-x grid-container">
                        <div className="cell  light b-radius-4x medium-8 medium-offset-2 large-6 large-offset-3 p-t-b-40">
                            <div className="grid-x grid-padding-x">
                                <div className="cell small-10 small-offset-1 m-t--80 m-b-20 text-center">
                                    <img src="https://pikpart.com/static/media/smart-garage-new.15be769c.png" style={{ width: "90px",backgroundColor:"#fb8300" }} />
                                </div>
                                <div className="cell small-10 small-offset-1">
                                    <label htmlFor="exampleFileUpload" className="button">Upload File</label>
                                    <input type="file" onChange={(event) => handleSelection(event)} id="exampleFileUpload" class="show-for-sr" />
                                    <div className="grid-x">
                                        <div className="cell small-12 medium-6">
                                            <button className="button" onClick={()=>handle(selectedImage,valu)}> Update </button>
                                        </div>
                                        <div className="cell small-12 medium-6">
                                        <img alt="not fount" width={"250px"} src={selectedImage} />
                                        </div>
                                    </div>

                                </div>
                                <div className="cell small-10 small-offset-1">
                                    <div className="m-t-20 font-size-small">
                                        <p>
                                            <div>Upload desired Image <a href="#">Select an Image through Upload button and then press Update to see changes</a>. Visit our site for more information <a href="https://pikpart.com/" target="_blank">Pikrit</a></div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        , document.getElementById("portalRoot"));
}

export default PotalComponent
