import React from 'react';
import Obfuscate from 'react-obfuscate';

const TeamMember = (props) => (
    <div
        className="flex flex-col md:flex-row mb-20 md:mb-12 teammember text-center md:text-left"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="250"
        data-aos-offset="0"
        data-aos-easing="ease-in"
    >
        <div className="w-full md:w-1/6 mb-4 md:mb-0">
            <div className="w-1/2 md:w-full" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <img src={`/headshots/${props.lastName.toLowerCase()}.jpg`} />
            </div>
        </div>
        <div className="md:ml-8 ml-0 md:w-3/4 w-full">
            <h2 className="text-3xl" style={{ color: '#002878' }}>
                {props.firstName} {props.lastName}
            </h2>
            <h3 className="text-2xl my-4">{props.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: props.bio }} />
            <div className="mt-4">
                <span>Contact</span>&nbsp;
                <Obfuscate email={`${props.email}@colby.edu`} className="section-cta-obfuscated" />
            </div>
        </div>
    </div>
);

export default TeamMember;
