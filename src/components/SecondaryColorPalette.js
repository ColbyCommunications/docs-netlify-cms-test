import React from 'react';

const PrimaryColorPalette = (props) => {
    const colors = [
        { name: 'Blue', pms: '277', cmyk: '27/7/0/0', hex: '#b7d4f1', rgb: '183 212 241' },
        { name: 'Green', pms: '7741', cmyk: '71/11/83/20', hex: '#428d50', rgb: '66 141 80' },
        { name: 'Warm Red', pms: '7597', cmyk: '1/80/89/5', hex: '#e15630', rgb: '225 86 48' },
        { name: 'Yellow', pms: '142', cmyk: '2/25/74/2', hex: '#f1bd5b', rgb: '241 189 91' },
        { name: 'Purple', pms: '7663', cmyk: '69/89/2/4', hex: '#6a3e90', rgb: '106 62 144' },
        { name: 'Lime Green', pms: '374', cmyk: '30/0/64/0', hex: '#C5E86C', rgb: '197 232 108' },
        { name: 'Orange', pms: '166', cmyk: '0/63/97/12', hex: '#d95900', rgb: '217 89 0' },
    ];

    return (
        <div className="grid grid-cols-12 gap-4">
            {colors.map((color, i) => {
                return (
                    <div className="col-span-4" key={i}>
                        <div style={{ backgroundColor: color.hex, height: '60px' }}></div>
                        <div className="py-2 text-sm">
                            <p>
                                <b>PMS {color.pms}</b>
                            </p>
                            <p>RGB {color.rgb}</p>
                            <p>CMYK {color.cmyk}</p>
                            <p>HEX {color.hex}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PrimaryColorPalette;
