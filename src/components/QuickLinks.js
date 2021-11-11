import React from 'react';
import { Link } from 'gatsby';
import Obfuscate from 'react-obfuscate';
import QuickLinksJson from './quicklinks.json';

const QuickLinks = (props) => {
    if (!props.page) {
        return <div></div>;
    }

    const page = QuickLinksJson.find((page) => page.page === props.page);

    if (!page) {
        return <div></div>;
    }

    /*
        <div className="uppercase mb-4 text-white font-semibold">
                            {quickLink.section}
                        </div>
    */
    return (
        <div>
            {page.quickLinks.map((quickLink, i) => {
                return (
                    <div className="flex p-2 identity-quicklink mb-4">
                        <div>
                            <svg
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    width: '100%',
                                }}
                                viewBox={`${
                                    quickLink.icon.viewBox ? quickLink.icon.viewBox : '0 0 16 16'
                                }`}
                                fill="#002878"
                            >
                                {quickLink.icon.paths.map((path) => (
                                    <path fillRule="evenodd" d={path} />
                                ))}
                            </svg>
                        </div>
                        <div key={i}>
                            <div className="mb-2 font-semibold">
                                <Link to={quickLink.learnMoreLink}>{quickLink.headline}</Link>
                            </div>
                            <div className="mb-4 text-sm">{quickLink.bodyCopy}</div>
                            <div className="text-sm" style={{ color: '#002878' }}>
                                <div className="flex items-center identity-quicklink-learn-more">
                                    <Link to={quickLink.learnMoreLink}>{quickLink.learnMore}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="p-4 text-black mt-8" style={{ borderTop: '2px solid black' }}>
                <div className="mb-2 font-semibold">{page.questions.title}</div>
                <div className="flex">
                    <div className="text-sm">
                        Contact{' '}
                        <Obfuscate
                            email={page.questions.contact}
                            style={{ color: '#002878', textDecoration: 'underline' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;
