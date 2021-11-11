import React from 'react';
import vimeoBoxImg from '../images/vimeoBox.jpg';

const VimeoBox = (props) => (
    <div className="vimeoBox">
        <div className="mb-4 mt-8">
            <img
                className="object-contain md:object-scale-down cursor-pointer"
                src={vimeoBoxImg}
                onClick={() => (window.location = 'https://vimeo.com/user/12746784/folder/3205661')}
            />
        </div>
        <div className="mb-2 font-semibold">Video Library</div>
        <div className="mb-4 text-sm">Browse our curated collections of videos inside Vimeo.</div>
        <div>
            <a
                href="https://vimeo.com/user/12746784/folder/3205661"
                className="text-sm"
                style={{ color: '#002878' }}
            >
                Learn More
            </a>
        </div>
    </div>
);

export default VimeoBox;
