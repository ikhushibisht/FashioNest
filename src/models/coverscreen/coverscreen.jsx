import React, { useState, useEffect } from "react";
import './coverscreen.css'
import arrow from '../assets/arrow.png'
import person_image from '../assets/person_image.png'

const Coverscreeen = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1000); 

        // Clear the timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='coverscreen'>
            <div className="cover-left">
                {showContent && (
                    <>
                        <h2>NEW ARRIVALS</h2>
                        <div>
                            <div className="New">
                                <p>New</p>
                            </div>
                            <p>Collections</p>
                            <p>For Everyone</p>
                        </div>
                        <div className="cover-latest">
                            <div>Latest Collection</div>
                            <img src={arrow} alt="" style={{ width: '30px', height: '30px' }} />
                        </div>
                    </>
                )}
            </div>
            <div className={`cover-right ${showContent ? 'slideInLeft' : ''}`}>
                <img src={person_image} alt="" style={{ width: '400px', height: '500px' }} />
            </div>
        </div>
    )
}

export default Coverscreeen
