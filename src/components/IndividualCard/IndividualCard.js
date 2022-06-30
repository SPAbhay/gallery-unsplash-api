import React from 'react';
import './IndividualCard.css';
import {AiOutlineDownload} from "react-icons/all";

const IndividualCard = ({image}) => {
    return (
        <div onClick={()=> window.open(image.user.links.html, "")} className="slider-card">
            <div>
                <img className="slider-card-image" src={image.urls.full}/>
                <div className="slider-card-content">
                    <div className="slider-card-profile">
                        <img className="slider-card-profile-image" src={image.user.profile_image.small} alt="user profile image"/>
                    </div>

                    <div className="slider-card-description">
                        <p className="slider-card-name">{image.user.name}</p>
                        <p className="slider-card-likes">{image.likes} likes received</p>
                    </div>
                    <div className="slider-card-download">

                        <a download="download.jpg" href={image.links.download} target="_blank" download><AiOutlineDownload size={30}></AiOutlineDownload></a>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default IndividualCard;