import React from 'react';

const WebColorPalette = (props) => {
    const primaryColors = [
        { name: 'Colby Blue', hex: '#002878' },
        { name: 'Warm Gray 2', hex: '#e3d7d1' },
    ];

    const secondaryColors = [
        { name: 'Blue', hex: '#b7d4f1' },
        { name: 'Green', hex: '#428d50' },
        { name: 'Warm Red', hex: '#e15630' },
        { name: 'Yellow', hex: '#f1bd5b' },
        { name: 'Purple', hex: '#6a3e90' },
        { name: 'Lime Green', hex: '#C5E86C' },
        { name: 'Orange', hex: '#d95900' },
    ];

    return (
        <>
            <div className="mb-4">
                <h3 style={{ marginBottom: '0.5rem' }}>Primary Colors</h3>
                <div className="grid grid-cols-12 gap-4">
                    {primaryColors.map((color, i) => {
                        return (
                            <div className="col-span-4" key={i}>
                                <div style={{ backgroundColor: color.hex, height: '60px' }}></div>
                                <div className="py-2 text-sm">
                                    <p>HEX {color.hex}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Secondary Colors</h3>
                <div className="grid grid-cols-12 gap-4">
                    {secondaryColors.map((color, i) => {
                        return (
                            <div className="col-span-4" key={i}>
                                <div style={{ backgroundColor: color.hex, height: '60px' }}></div>
                                <div className="py-2 text-sm">
                                    <p>HEX {color.hex}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default WebColorPalette;
