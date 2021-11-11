import React from 'react';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';

import ColbyLogo from '../images/COLBY_logotype_white.png';

const Footer = (props) => (
    <>
        <div
            className="py-12 identity-footer px-4"
            style={{ backgroundColor: '#f1bd5b', color: '#000' }}
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="col-span-1 md:col-span-8">
                        <h2
                            className="font-medium text-3xl"
                            style={{ fontFamily: 'franklin-gothic-urw, sans-serif' }}
                        >
                            About this guide
                        </h2>
                        <p className="mt-6 mb-4">
                            This Identity Toolkit is intended to help you express the vision,
                            mission, and personality of the College while communicating about the
                            work and impact of the Colby community. This guide is comprehensive but
                            not exhaustive, offering resources and recommendations for the creation
                            of cohesive communications.
                        </p>
                        <h3 className="font-semibold text-lg">Questions?</h3>
                        <p className="mb-4">
                            Please visit the{' '}
                            <Link to="/connect" style={{ textDecoration: 'underline' }}>
                                Connect
                            </Link>{' '}
                            page to find someone with specific expertise.
                        </p>
                        <p>
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                fill="#000"
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block mr-2"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956zM13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"
                                />
                            </svg>{' '}
                            Spot a bug? Provide details on our{' '}
                            <a
                                style={{ textDecoration: 'underline' }}
                                href="https://form.asana.com/?k=iIPrQ7b0-WdGlaozS5i3sg&d=677363920314919"
                            >
                                Help Desk Form
                            </a>
                        </p>
                    </div>
                    <div className="col-span-1 md:col-span-4">
                        <h2
                            className="font-medium text-3xl mb-4"
                            style={{ fontFamily: 'franklin-gothic-urw, sans-serif' }}
                        >
                            Other helpful resources
                        </h2>
                        <div>
                            <ul>
                                <li className="mb-4">
                                    <h3 className="font-semibold">
                                        <a href="https://www.colby.edu/communicationsoffice">
                                            Office of Communications
                                        </a>
                                    </h3>
                                    <p>
                                        The Office of Communications is responsible for
                                        communications strategies that advance and protect Colby’s
                                        reputation.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h3 className="font-semibold">
                                        <a href="http://www.colby.edu/acits/">Academic ITS</a>
                                    </h3>
                                    <p>
                                        To request Wordpress training or consult on community
                                        website options, contact{' '}
                                        <a href="mailto:wordpress@colby.edu">wordpress@colby.edu</a>
                                        .
                                    </p>
                                </li>
                                {/*<li className="mb-4">
                                    <h3 className="font-semibold ">
                                        <a href="https://colbycommunications.github.io/">
                                            Colby Developer Pages
                                        </a>
                                    </h3>
                                    <p>
                                        Find technical documentation, development best practices,
                                        and workflow information.
                                    </p>
                                </li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ backgroundColor: '#575757', color: '#fff' }}>
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-between flex-col md:flex-row">
                    <div className="flex items-center justify-center">
                        <div className="md:mr-8 mb-6 md:mb-0">
                            <img className="w-24 md:w-full" src={ColbyLogo} alt="Colby Logo" />
                        </div>
                        <div className="hidden md:block">Office of Communications</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div
                            className="mr-4"
                            style={{ cursor: 'pointer' }}
                            onClick={() =>
                                (window.location = 'https://www.facebook.com/colbycollege')
                            }
                        >
                            <svg
                                height="32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024"
                            >
                                <path
                                    fill="#fff"
                                    d="M1024,512C1024,229.2,794.8,0,512,0S0,229.2,0,512c0,255.6,187.2,467.4,432,505.8V660H302V512H432V399.2C432,270.9,508.4,200,625.4,200c56,0,114.6,10,114.6,10V336H675.4c-63.6,0-83.4,39.5-83.4,80v96H734L711.3,660H592v357.8C836.8,979.4,1024,767.6,1024,512Z"
                                />
                                <path
                                    d="M711.3,660,734,512H592V416c0-40.5,19.8-80,83.4-80H740V210s-58.6-10-114.6-10C508.4,200,432,270.9,432,399.2V512H302V660H432v357.8a519.23,519.23,0,0,0,160,0V660Z"
                                    fill="transparent"
                                />
                            </svg>
                        </div>
                        <div
                            className="mr-4"
                            style={{ cursor: 'pointer' }}
                            onClick={() =>
                                (window.location = 'https://www.linkedin.com/school/colby-college/')
                            }
                        >
                            <svg
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 448"
                            >
                                <path
                                    fill="#fff"
                                    d="M416,0H31.9A32.14,32.14,0,0,0,0,32.3V415.7A32.14,32.14,0,0,0,31.9,448H416a32.22,32.22,0,0,0,32-32.3V32.3A32.22,32.22,0,0,0,416,0ZM135.4,384H69V170.2h66.5V384ZM102.2,141a38.5,38.5,0,1,1,38.5-38.5A38.52,38.52,0,0,1,102.2,141ZM384.3,384H317.9V280c0-24.8-.5-56.7-34.5-56.7-34.6,0-39.9,27-39.9,54.9V384H177.1V170.2h63.7v29.2h.9c8.9-16.8,30.6-34.5,62.9-34.5,67.2,0,79.7,44.3,79.7,101.9Z"
                                />
                            </svg>
                        </div>
                        <div
                            className="mr-4"
                            style={{ cursor: 'pointer' }}
                            onClick={() =>
                                (window.location = 'https://www.youtube.com/user/colbycollege')
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 176 124"
                            >
                                <path
                                    d="M172.3,19.4A22.27,22.27,0,0,0,156.7,3.7C143,0,88,0,88,0S33,0,19.2,3.7A22.1,22.1,0,0,0,3.6,19.4C0,33.2,0,62,0,62s0,28.8,3.7,42.6a22.27,22.27,0,0,0,15.6,15.7C33,124,88,124,88,124s55,0,68.8-3.7a22.1,22.1,0,0,0,15.6-15.7C176,90.8,176,62,176,62S176,33.2,172.3,19.4Z"
                                    fill="#fff"
                                />
                                <polygon points="70 88.2 116 62 70 35.8 70 88.2" fill="#575757" />
                            </svg>
                        </div>
                        <div
                            className="mr-4"
                            style={{ cursor: 'pointer' }}
                            onClick={() => (window.location = 'https://www.colby.edu/newsletter/')}
                        >
                            <svg
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 12"
                            >
                                <path
                                    fill="#fff"
                                    d="M15,0H1A1,1,0,0,0,0,1V11a.94.94,0,0,0,1,1H15a.94.94,0,0,0,1-1V1A1,1,0,0,0,15,0Zm-.5,1.4V2.7L8,6.3,1.6,2.7V1.4ZM1.6,10.5v-6L8,8l6.5-3.5v6.1H1.6Z"
                                />
                            </svg>
                        </div>
                        <div
                            className="mr-4"
                            style={{ cursor: 'pointer' }}
                            onClick={() =>
                                (window.location = 'https://www.instagram.com/colbycollege/')
                            }
                        >
                            <svg
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 504 503.9"
                            >
                                <path
                                    fill="#fff"
                                    d="M256,49.5c67.3,0,75.2.3,101.8,1.5,24.6,1.1,37.9,5.2,46.8,8.7a78.18,78.18,0,0,1,29,18.8,77,77,0,0,1,18.8,29c3.4,8.9,7.6,22.2,8.7,46.8,1.2,26.6,1.5,34.5,1.5,101.8s-.3,75.2-1.5,101.8c-1.1,24.6-5.2,37.9-8.7,46.8a78.18,78.18,0,0,1-18.8,29,77,77,0,0,1-29,18.8c-8.9,3.4-22.2,7.6-46.8,8.7-26.6,1.2-34.5,1.5-101.8,1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7a78.18,78.18,0,0,1-29-18.8,77,77,0,0,1-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2,1.5-101.8c1.1-24.6,5.2-37.9,8.7-46.8a78.18,78.18,0,0,1,18.8-29,77,77,0,0,1,29-18.8c8.9-3.4,22.2-7.6,46.8-8.7,26.6-1.3,34.5-1.5,101.8-1.5m0-45.4c-68.4,0-77,.3-103.9,1.5S107,11.1,91,17.3A122.79,122.79,0,0,0,46.4,46.4,125,125,0,0,0,17.3,91c-6.2,16-10.5,34.3-11.7,61.2S4.1,187.6,4.1,256s.3,77,1.5,103.9,5.5,45.1,11.7,61.2a122.79,122.79,0,0,0,29.1,44.6A125,125,0,0,0,91,494.8c16,6.2,34.3,10.5,61.2,11.7s35.4,1.5,103.9,1.5,77-.3,103.9-1.5,45.1-5.5,61.2-11.7a122.79,122.79,0,0,0,44.6-29.1,125,125,0,0,0,29.1-44.6c6.2-16,10.5-34.3,11.7-61.2s1.5-35.4,1.5-103.9-.3-77-1.5-103.9-5.5-45.1-11.7-61.2a122.79,122.79,0,0,0-29.1-44.6,125,125,0,0,0-44.6-29.1C405.2,11,386.9,6.7,360,5.5S324.4,4.1,256,4.1Z"
                                    transform="translate(-4.1 -4.1)"
                                />
                                <path
                                    fill="#fff"
                                    d="M256,126.6A129.4,129.4,0,1,0,385.4,256,129.42,129.42,0,0,0,256,126.6ZM256,340a84,84,0,1,1,84-84A84,84,0,0,1,256,340Z"
                                    transform="translate(-4.1 -4.1)"
                                />
                                <circle fill="#fff" cx="386.4" cy="117.4" r="30.2" />
                            </svg>
                        </div>
                        <div
                            className="mr-4"
                            style={{ cursor: 'pointer' }}
                            onClick={() => (window.location = 'https://twitter.com/ColbyCollege')}
                        >
                            <svg
                                height="32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 400 324"
                            >
                                <path
                                    fill="#fff"
                                    d="M126,324c150.36,0,232.63-124.69,232.63-232.64,0-3.5,0-7-.16-10.52a166.49,166.49,0,0,0,40.82-42.41,165.81,165.81,0,0,1-47,12.91,82.23,82.23,0,0,0,36-45.28,162.73,162.73,0,0,1-52,19.77,81.78,81.78,0,0,0-141.43,56,90.69,90.69,0,0,0,2.07,18.65A232.19,232.19,0,0,1,28.4,15,82.09,82.09,0,0,0,53.76,124.21a82.87,82.87,0,0,1-37-10.2v1.11a81.93,81.93,0,0,0,65.54,80.2,82.39,82.39,0,0,1-36.84,1.44,81.75,81.75,0,0,0,76.38,56.76A164,164,0,0,1,20.27,288.6,158.72,158.72,0,0,1,.82,287.49,232.58,232.58,0,0,0,126,324"
                                />
                            </svg>
                        </div>
                        <div className="hidden md:block">
                            {!props.isAuthenticated && (
                                <a className="cursor-pointer" onClick={() => navigate('/account')}>
                                    Login
                                </a>
                            )}
                            {props.isAuthenticated && (
                                <a className="cursor-pointer" onClick={() => navigate('/account')}>
                                    Account
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="block md:hidden flex pt-8 justify-center">
                    <div className="mr-4">Office of Communications</div>
                    <div>
                        {!props.isAuthenticated && (
                            <a className="cursor-pointer" onClick={() => navigate('/account')}>
                                Login
                            </a>
                        )}
                        {props.isAuthenticated && (
                            <a className="cursor-pointer" onClick={() => navigate('/account')}>
                                Account
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Footer;
