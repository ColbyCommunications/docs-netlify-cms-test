import React from 'react';
import { Link } from 'gatsby';
import Obfuscate from 'react-obfuscate';

const VendorHelp = () => (
    <div>
        <div>
            <p className="my-4">
                Browse a list of <Link to="/vendors">vendors</Link> Colby has successfully
                collaborated with on various creative and marketing communications projects. If you
                would like another vendor included please email{' '}
                <Obfuscate email="communicatons@colby.edu" />.
            </p>
        </div>
        <Link to="/vendors" className="section-cta">
            Find the help you need
        </Link>
    </div>
);

export default VendorHelp;
