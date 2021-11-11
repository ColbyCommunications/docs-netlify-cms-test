import React from 'react';
import { Link } from 'gatsby';

const InThisSection = (props) => {
    const ucwords = (str) => {
        let string = str.toLowerCase();
        return string.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function (s) {
            return s.toUpperCase();
        });
    };
    return (
        <div>
            <div className="text-xl mb-4">In this section:</div>
            <div>
                {props.pages.map((page) => {
                    return (
                        <div
                            className="identity-button max-w-sm rounded shadow-lg mb-4"
                            style={{ backgroundColor: '#002878' }}
                        >
                            <Link
                                className="text-white inline-block w-full h-full px-6 pt-4 pb-4"
                                to={page.pathRaw}
                            >
                                {ucwords(page.name)}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default InThisSection;
