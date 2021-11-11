import React from 'react';

const DosDonts = (props) => (
    <div className="grid grid-cols-2 gap-8 mt-4">
        <div>
            <div className="text-2xl font-bold text-center mb-2" style={{ color: '#94a04c' }}>
                DO
            </div>
            <div>
                <ul className="list-disc pl-8">
                    {props.dos.map((aDo) => {
                        return <li className="mb-2">{aDo}</li>;
                    })}
                </ul>
            </div>
        </div>
        <div>
            <div className="text-2xl font-bold text-center mb-2" style={{ color: '#b1040e' }}>
                DON&rsquo;T
            </div>
            <div>
                <ul className="list-disc pl-8">
                    {props.donts.map((dont) => {
                        return <li className="mb-2">{dont}</li>;
                    })}
                </ul>
            </div>
        </div>
    </div>
);

export default DosDonts;
