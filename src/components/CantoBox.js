import React from 'react';
import cantoBoxImg from '../images/cantoBox.jpg';

const CantoBox = (props) => (
    <div className="cantoBox">
        <div className="mb-4 mt-8">
            <img
                className="object-contain md:object-scale-down cursor-pointer"
                src={cantoBoxImg}
                onClick={() => (window.location = 'https://colbycollege.canto.com/')}
            />
        </div>
        <div className="mb-2 font-semibold">Colby Photo Library</div>
        <div className="mb-2 text-sm">
            Browse our curated collections of photos inside CANTO, our photo library.
        </div>
        <div className="text-xs mb-4" style={{ color: '#757575' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-lock-fill inline"
                viewBox="0 0 16 16"
            >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            &nbsp;<i style={{ verticalAlign: 'sub' }}>Accessible to faculty and staff only</i>
        </div>
        <div>
            <a
                href="https://colbycollege.canto.com/"
                className="text-sm"
                style={{ color: '#002878' }}
            >
                Learn More
            </a>
        </div>
    </div>
);

export default CantoBox;
