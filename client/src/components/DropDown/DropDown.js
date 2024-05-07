// DropDown.js

import React, { useState } from 'react';
import { poseImages } from '../../utils/pose_images';
import './DropDown.css';

export default function DropDown({ poseList, currentPose, setCurrentPose }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='dropdown dropdown-container'>
            <button
                className="btn btn-secondary dropdown-toggle"
                type='button'
                id="pose-dropdown-btn"
                onClick={toggleDropdown}
            >
                {currentPose}
            </button>
            {isOpen && (
                <ul className="dropdown-menu dropdown-custom-menu" aria-labelledby="dropdownMenuButton1">
                    {poseList.map((pose) => (
                        <li key={pose} onClick={() => setCurrentPose(pose)}>
                            <div className="dropdown-item-container">
                                <p className="dropdown-item-1">{pose}</p>
                              
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
