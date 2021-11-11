import React from 'react';

const PhotoLibraries = (props) => (
    <div className="grid grid-cols-3 gap-4 mt-6">
        <div
            className="cursor-pointer img-hover-zoom"
            onClick={() =>
                (window.location =
                    'https://colbycollege.canto.com/v/MainCampus/allfiles?from_main_library&viewIndex=0')
            }
        >
            <div className="mb-4">
                <h3>Main Campus</h3>
            </div>
            <div className="img-hover-zoom">
                <img
                    className="object-contain md:object-scale-down"
                    src="/images/photo-library-campus.jpg"
                />
            </div>
        </div>
        <div
            className="cursor-pointer img-hover-zoom"
            onClick={() =>
                (window.location =
                    'https://colbycollege.canto.com/v/DowntownWaterville/allfiles?from_main_library&viewIndex=0')
            }
        >
            <div className="mb-4">
                <h3>Downtown</h3>
            </div>
            <div>
                <img
                    className="object-contain md:object-scale-down"
                    src="/images/photo-library-downtown.jpg"
                />
            </div>
        </div>
        <div
            className="cursor-pointer img-hover-zoom"
            onClick={() =>
                (window.location =
                    'https://colbycollege.canto.com/v/Media/allfiles?from_main_library&viewIndex=0')
            }
        >
            <div className="mb-4">
                <h3>Media Requests</h3>
            </div>
            <div>
                <img
                    className="object-contain md:object-scale-down"
                    src="/images/photo-library-press.jpg"
                />
            </div>
        </div>
    </div>
);

export default PhotoLibraries;
