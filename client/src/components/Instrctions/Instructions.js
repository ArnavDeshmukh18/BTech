import React, { useState, useEffect } from 'react';

import { poseInstructions } from '../../utils/data';
import { poseImages } from '../../utils/pose_images';

import './Instructions.css';

export default function Instructions({ currentPose, textTospeech }) {
    const [instructions, setInstructions] = useState(poseInstructions);
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        if (flag && textTospeech) {
            instructions[currentPose].forEach(instruction => {
                const value = new SpeechSynthesisUtterance(instruction);
                window.speechSynthesis.speak(value);
            });
        }
    }, [currentPose, instructions, flag, textTospeech]);

    useEffect(() => {
        const handleEnd = () => {
            setFlag(false); // Set flag to false when speech synthesis ends
        };

        window.speechSynthesis.addEventListener('end', handleEnd);

        return () => {
            window.speechSynthesis.removeEventListener('end', handleEnd);
        };
    }, []);

    return (
        <div className="instructions-container">
            <ul className="instructions-list">
                {instructions[currentPose].map((instruction, index) => (
                    <li key={index} className="instruction">{instruction}</li>
                ))}
            </ul>
            <img className="pose-demo-img" src={poseImages[currentPose]} alt="Pose Demo" />
        </div>
    );
}
