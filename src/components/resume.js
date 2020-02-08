import React from 'react'


const Resume = () => {
    return (
        <div className="resume-container">
            <div className="download-button">
                <button><a href="https://drive.google.com/file/d/1gQEVTVa3HefHFM03dBTQIKOrxJlBismt/view?usp=sharing" target="_blank" rel="noopener noreferrer">Open In Separate Tab To Download</a></button>
            </div>
            <div className="resume">
                <iframe src="https://resume.creddle.io/embed/btb2cnnxwfe"
                    width="850" height="1100" title="resume" seamless></iframe>
            </div>

        </div>
    )
}

export default Resume;