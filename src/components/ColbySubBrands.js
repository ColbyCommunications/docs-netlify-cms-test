import React, { useState } from 'react';

import BuckLab from '../images/logos/Buck Lab/Blue/Buck-Lab-logo_Blue.png';
import CAH from '../images/logos/Center for the Arts and Humanities/Blue/Center for Arts and Humanities Identifier Vertical_PMS280.jpg';
import JewishLife from '../images/logos/Center for Small Town Jewish Life/Blue/Center for Small Town Jewish Life Identifer Blue.jpg';
import DareNorthward from '../images/logos/Dare Northward Campaign/Logo/Dare Northward Logo/RGB/Primary Logo/Blue/Dare Northward-Primary Logo-280.jpg';
import Libraries from '../images/logos/Colby Libraries/Blue Logo/Library Logo_Blue.png';
import DavisConnects from '../images/logos/DavisConnects/Blue/C25_DavisConnects_w_tag_280.jpg';
import Goldfarb from '../images/logos/Goldfarb Center/Blue/goldfarbID_PublicAffairs.jpg';
import Oak from '../images/logos/Oak Institute/Blue/Oak Institute logo_blue.jpg';
import SustainableColby from '../images/logos/Sustainable Colby/Primary identifier/Sustainability Identifier w carbon neutral.jpg';

const ColbySubBrands = () => {
    const [openSubBrand, setOpenSubBrand] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    function openSubBrandPanel(subBrand) {
        setOpenSubBrand(subBrand);
        setIsOpen(true);
    }

    return (
        <div>
            <p className="text-center text-lg font-semibold my-8">
                Click on a logo to learn more about Colby sub-brands
            </p>
            <div className="grid grid-cols-12">
                <div
                    className={`col-span-8 flex justify-center items-center sub-brand-logo ${
                        openSubBrand === 'bucklab' ? 'open' : 'not-open'
                    }`}
                    onClick={openSubBrandPanel.bind(null, 'bucklab')}
                >
                    <img className="object-contain md:object-scale-down buck-logo" src={BuckLab} />
                </div>
                <div
                    className={`col-span-4 flex justify-center items-center sub-brand-logo ${
                        openSubBrand === 'centerForArtsAndHumanities' ? 'open' : 'not-open'
                    }`}
                    onClick={openSubBrandPanel.bind(null, 'centerForArtsAndHumanities')}
                >
                    <img className="cah-logo object-contain md:object-scale-down" src={CAH} />
                </div>
            </div>
            {((isOpen && openSubBrand === 'bucklab') ||
                (isOpen && openSubBrand === 'centerForArtsAndHumanities')) && (
                <div>
                    {openSubBrand === 'centerForArtsAndHumanities' && (
                        <div className="my-8 relative">
                            <div
                                className="absolute right-0 cursor-pointer"
                                style={{ color: '#d95900' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-x"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-4">Center for the Arts and Humanities</h3>
                            <p className="my-4">
                                The Center for the Arts and Humanities celebrates the pivotal role
                                of the arts and humanities in the intellectual life of the College
                                and the community. The center also promotes the long-term benefits
                                of the skills developed through humanistic research.
                            </p>
                            <p>
                                The Center for the Arts and Humanities logo is composed of the Colby
                                logotype and the center’s name set in Janson.
                            </p>
                        </div>
                    )}
                    {openSubBrand === 'bucklab' && (
                        <div className="my-8 relative">
                            <div
                                className="absolute right-0 cursor-pointer"
                                style={{ color: '#d95900' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-x"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-4">
                                Buck Lab for Environment and Climate Change
                            </h3>
                            <p className="my-4">
                                The Buck Lab supports broad initiatives at Colby focused on climate
                                change and other environmental issues, including student and faculty
                                research, experiential learning opportunities, internships with new
                                collaborative partners doing environmental work, community
                                engagement, professional skills development, career networking, and
                                travel to professional meetings. The lab is also an incubator to
                                incentivize new and broad-reaching interdisciplinary work to further
                                understand and solve the world’s daunting environmental and
                                climate-related challenges. The Buck Lab is a highly visible public
                                face for Colby’s strong contributions to and leadership role in the
                                study of the environment.
                            </p>
                            <p>
                                The Buck Lab for Environment and Climate Change logo is composed of
                                the Colby logotype and the center’s name set in Janson.
                            </p>
                        </div>
                    )}
                </div>
            )}
            <div className="grid grid-cols-12 gap-4">
                <div
                    className="col-span-8 flex justify-center items-center sub-brand-logo"
                    onClick={openSubBrandPanel.bind(null, 'jewishLife')}
                >
                    <img className="object-contain md:object-scale-down" src={JewishLife} />
                </div>
                <div
                    className="col-span-4 flex justify-center items-center sub-brand-logo"
                    onClick={openSubBrandPanel.bind(null, 'dareNorthward')}
                >
                    <img
                        className="object-contain md:object-scale-down dn-logo"
                        src={DareNorthward}
                    />
                </div>
            </div>
            {((isOpen && openSubBrand === 'jewishLife') ||
                (isOpen && openSubBrand === 'dareNorthward')) && (
                <div>
                    {openSubBrand === 'jewishLife' && (
                        <div className="my-8 relative">
                            <div
                                className="absolute right-0 cursor-pointer"
                                style={{ color: '#d95900' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-x"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-4">Center for Small Town Jewish Life</h3>
                            <p className="my-4">
                                The Center for Small Town Jewish Life cultivates transformational
                                learning and vibrant Jewish community rooted in the state of Maine.
                                The center envisions a socially equitable, multigenerational, and
                                geographically diverse Jewish world sustained by intentional
                                collaboration.
                            </p>
                            <p>
                                The Center for Small Town Jewish Life logo includes the center’s
                                name in Janson along with a custom graphic representing the
                                community created between Colby and the Beth Israel Congregation in
                                Waterville.
                            </p>
                        </div>
                    )}
                    {openSubBrand === 'dareNorthward' && (
                        <div className="my-8 relative">
                            <div
                                className="absolute right-0 cursor-pointer"
                                style={{ color: '#d95900' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-x"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-4">Dare Northward</h3>
                            <p>
                                The Dare Northward campaign logo represents the many bold moves
                                Colby has made—and continues to make—in its extraordinary quest to
                                enhance student experiences, improve outcomes, and produce
                                generations of leaders to tackle the world’s greatest challenges.
                            </p>
                        </div>
                    )}
                </div>
            )}
            <div className="grid grid-cols-12 gap-4">
                <div
                    className="col-span-6 flex justify-center items-center sub-brand-logo"
                    onClick={openSubBrandPanel.bind(null, 'libraries')}
                >
                    <img
                        className="object-contain md:object-scale-down libraries-logo"
                        src={Libraries}
                    />
                </div>
                <div
                    className="col-span-6 flex justify-center items-center sub-brand-logo"
                    onClick={openSubBrandPanel.bind(null, 'davisConnects')}
                >
                    <img
                        className="object-contain md:object-scale-down dc-logo"
                        src={DavisConnects}
                    />
                </div>
            </div>
            {((isOpen && openSubBrand === 'libraries') ||
                (isOpen && openSubBrand === 'davisConnects')) && (
                <div>
                    {openSubBrand === 'libraries' && (
                        <div className="my-8 relative">
                            <div
                                className="absolute right-0 cursor-pointer"
                                style={{ color: '#d95900' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-x"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-4">Libraries</h3>
                            <p className="my-4">
                                The Colby College Libraries are central to Colby’s scholarship,
                                providing scholarly resources and services to advance teaching,
                                learning, and research experiences. The Colby Libraries fulfill
                                their mission by teaching and guiding students to discover,
                                evaluate, and ethically use information; collaborating with faculty
                                to enable their individual teaching and research needs; identifying,
                                acquiring, preserving, and providing access to scholarly works and
                                resources that support teaching and research; managing, preserving,
                                and promoting use of the College’s rare and unique materials, among
                                other primary sources; and providing user-centered spaces for
                                research, study, collaboration, and contemplation.
                            </p>
                            <p>
                                While the Sloop Hero logo is an authorized visual representation of
                                the Colby Libraries, the graphic shown here is the preferred
                                representation.
                            </p>
                        </div>
                    )}
                    {openSubBrand === 'davisConnects' && (
                        <div className="my-8 relative">
                            <div
                                className="absolute right-0 cursor-pointer"
                                style={{ color: '#d95900' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-x"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-4">DavisConnects</h3>
                            <p className="my-4">
                                DavisConnects prepares Colby students for lifelong success by
                                integrating the College’s leading liberal arts education with unique
                                internship, research, or global experiences for every student,
                                regardless of personal and financial networks.
                            </p>
                            <p className="my-4">
                                When representing DavisConnects in any channel (including but not
                                limited to web, social, video, print, and signage), use the
                                DavisConnects logo without the immediate pairing of the Colby
                                logotype. The Colby logo should appear on the same page or at the
                                end of a video to anchor DavisConnects to Colby.
                            </p>
                            <p className="my-4">
                                Use the primary logo, with the tagline “Design Your Future,” when
                                introducing the program. The secondary logo, without the tagline,
                                may be used in instances when the audience is already familiar with
                                the program, such as on an interior webpage or printed page, or on
                                signage in a campus building.
                            </p>
                            <p className="my-4">
                                The horizontal version is for primary use, while the vertical is
                                reserved for secondary or space-limiting locations such as social
                                media icons.
                            </p>
                            <p className="my-4">
                                In extreme situations where size is limited to restrict clear
                                legibility of DavisConnects, the square DC graphic may be used
                                alone. This is the only time the logo may be broken.
                            </p>
                        </div>
                    )}
                </div>
            )}
            <div className="grid grid-cols-12 gap-4">
                <div
                    className="col-span-6 flex justify-center items-center sub-brand-logo"
                    onClick={openSubBrandPanel.bind(null, 'goldfarbCenter')}
                >
                    <img
                        className="object-contain md:object-scale-down goldfarb-logo"
                        src={Goldfarb}
                    />
                </div>
                <div
                    className="col-span-6 flex justify-center items-center sub-brand-logo"
                    onClick={openSubBrandPanel.bind(null, 'oakInstitute')}
                >
                    <img className="object-contain md:object-scale-down oak-logo" src={Oak} />
                </div>
            </div>
            {((isOpen && openSubBrand === 'goldfarbCenter') ||
                (isOpen && openSubBrand === 'oakInstitute')) && (
                <div>
                    {openSubBrand === 'goldfarbCenter' && (
                        <div className="my-8 relative">
                            <div
                                className="absolute right-0 cursor-pointer"
                                style={{ color: '#d95900' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-x"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-4">Goldfarb Center for Public Affairs</h3>
                            <p className="my-4">
                                The mission of the Goldfarb Center is to be a vibrant information
                                hub for the world’s most pressing current events; increase awareness
                                of the role of public policy to address those challenges; inspire
                                active citizenship in the Colby community; empower and build the
                                leadership skills of Colby students; connect students with alumni
                                and world leaders who have established careers in public affairs;
                                spark thought-provoking public policy conversations; and provide a
                                forum for open, healthy discourse for all.
                            </p>
                            <p className="my-4">
                                The Goldfarb Center logo is composed of a custom graphic
                                representation of the center’s initials beside the center’s name,
                                along with the text “at Colby,” set in Janson.
                            </p>
                        </div>
                    )}
                    {openSubBrand === 'oakInstitute' && (
                        <div className="my-8 relative">
                            <div
                                className="absolute right-0 cursor-pointer"
                                style={{ color: '#d95900' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-x"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-4">Oak Institute for Human Rights</h3>
                            <p className="my-4">
                                The Oak Institute for Human Rights champions the struggles for
                                dignity, freedom, and justice of people throughout the world. The
                                Oak Institute is committed to engaging students and community
                                members in human rights work through civic engagement projects,
                                internships, events, art, and activism.
                            </p>
                            <p className="my-4">
                                The Oak Institute logo includes the emphasized word “OAK” stacked
                                above the smaller, closely aligned “Institute for Human Rights,” all
                                set in Janson, with an oak leaf filling negative space inside the O.
                            </p>
                        </div>
                    )}
                </div>
            )}
            <div className="grid">
                <div
                    className="flex justify-center items-center sub-brand-logo"
                    onClick={openSubBrandPanel.bind(null, 'sustainableColby')}
                >
                    <img
                        className="object-contain md:object-scale-down sustainable-colby-logo"
                        src={SustainableColby}
                    />
                </div>
                {isOpen && openSubBrand === 'sustainableColby' && (
                    <div>
                        <div className="my-8 relative">
                            <div
                                className="absolute right-0 cursor-pointer"
                                style={{ color: '#d95900' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-x"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-4">Sustainable Colby</h3>
                            <p className="my-4">
                                In April 2013, Colby became one of the first colleges in the country
                                to achieve carbon neutrality. Today, Colby remains committed to
                                practices and policies that respect the environment and promote
                                sustainable living principles. Pioneering academic programs and a
                                legacy of green values have made Colby a leader in environmental
                                initiatives, and success is evident: in the College's dramatic
                                reduction of carbon emissions, the effectiveness of the
                                Environmental Advisory Group, and innovative environmental
                                initiatives across campus.
                            </p>
                            <p className="my-4">
                                The Sustainable Colby logo, represented in total by the green and
                                blue leaf icon, reflects the foothills of Maine and the waters both
                                inland and coastal. When referring to the College’s sustainability
                                program, this is the logo to use. It may be paired with the text
                                “Sustainable Colby Carbon Neutral Since 2013.”
                            </p>
                            <p className="my-4">
                                Sustainable practices fall into four categories—land, energy,
                                resources, and transportation—each with a color to cue the
                                community. The color must always be associated with the area of
                                impact across all uses, including web, print, signage, and social
                                media. The leaf must always stay in the horizontal orientation as
                                shown and may not be altered, edited, or combined with other “green”
                                icons such as the recycling triangle or other leaf icons.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ColbySubBrands;
