import React from 'react';
import './CardSlider.css';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { useRef } from "react";
import IndividualCard from "../IndividualCard/IndividualCard";
import Button from "../Button/Button";

const CardSlider = ({images}) => {
    const slide = useRef(null);

    const slideLeft = () => {
        slide.current.scrollLeft = slide.current.scrollLeft - 500;
        // slide.scrollLeft = slide.scrollLeft + 500;
        console.log(slide.current.scrollLeft);
        // console.log(slider.scrollLeft);
    }

    const slideRight = () => {
        slide.current.scrollLeft = slide.current.scrollLeft + 500;
    }

    return (
        <>
            <section className="carousel">

                <div class="main-slider-container">

                    <div id="slider" className="slider" ref={slide}>
                        {images.map((image) => {
                            return (
                                <IndividualCard key={image.id} image={image}/>
                            )
                        })}
                    </div>
                </div>
                <div className="slider-buttons">
                    <div className="slider-icon">
                        <Button>
                            <MdChevronLeft size={40} onClick={slideLeft}/>
                        </Button>
                    </div>
                    <div className="slider-icon">
                        <Button>
                            <MdChevronRight size={40} onClick={slideRight}/>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CardSlider;