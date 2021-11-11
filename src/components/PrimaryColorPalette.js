import React from 'react';

const PrimaryColorPalette = (props) => (
    <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
            <div style={{ backgroundColor: '#002878', height: '120px' }}></div>
            <div className="py-2 text-sm">
                <p>
                    <b>PMS 280</b>
                </p>
                <p>RGB 0 40 120</p>
                <p>CMYK 100/72/0/18</p>
                <p>HEX #002878</p>
            </div>
        </div>
        <div className="col-span-4">
            <div style={{ backgroundColor: '#e3d7d1', height: '120px' }}></div>
            <div className="py-2 text-sm">
                <p>
                    <b>Warm Gray 2</b>
                </p>
                <p>RGB 227 215 209</p>
                <p>CMYK 0/6/6/11</p>
                <p>HEX #e3d7d1</p>
            </div>
        </div>
    </div>
);

export default PrimaryColorPalette;
