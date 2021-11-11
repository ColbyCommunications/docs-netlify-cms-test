import React from 'react';

const VideoBRoll = (props) => (
    <div className="grid grid-cols-3 gap-4 mt-6">
        <div
            className="cursor-pointer img-hover-zoom"
            onClick={() => (window.location = 'https://vimeo.com/445032594')}
        >
            <div className="mb-4">
                <h3>Aerial Footage</h3>
            </div>
            <div>
                <img
                    className="object-contain md:object-scale-down"
                    src="/images/video-b-roll-drone.jpg"
                />
            </div>
        </div>
        <div
            className="cursor-pointer img-hover-zoom"
            onClick={() => (window.location = 'https://vimeo.com/445032592')}
        >
            <div className="mb-4">
                <h3>Students</h3>
            </div>
            <div>
                <img
                    className="object-contain md:object-scale-down"
                    src="/images/video-b-roll-students.jpg"
                />
            </div>
        </div>
        <div
            className="cursor-pointer img-hover-zoom"
            onClick={() => (window.location = 'https://vimeo.com/445032593')}
        >
            <div className="mb-4">
                <h3>Commencement</h3>
            </div>
            <div>
                <img
                    className="object-contain md:object-scale-down"
                    src="/images/video-b-roll-commencement.jpg"
                />
            </div>
        </div>
    </div>
);

export default VideoBRoll;
