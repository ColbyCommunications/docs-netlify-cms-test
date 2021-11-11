import React from 'react';
import { ResourceDownload } from '../helpers/_helpers';

import { connect } from 'react-redux';
import { navigate } from 'gatsby';

import { setLoginRedirect, setResourceDownload } from '../actions/identityActions';

const mapStateToProps = (store) => {
    return {
        isAuthenticated: store.identity.isAuthenticated,
        loginRedirect: store.identity.loginRedirect,
        resourceDownload: store.identity.resourceDownload,
    };
};

const LogoWithDownload = (props) => {
    function onDownload() {
        if (props.locked) {
            if (!props.isAuthenticated) {
                props.setLoginRedirect(window.location);
                props.setResourceDownload(props.zip);
                window.localStorage.setItem('resourceDownload', props.zip);
                window.localStorage.setItem('loginRedirect', window.location.pathname);
                navigate(`/account`);
            } else {
                ResourceDownload(props.zip);
            }
        } else {
            ResourceDownload(props.zip);
        }
    }

    return (
        <div className="mt-8">
            <div>
                <img className={props.className} src={props.imageFile} />
            </div>
            <div className="flex justify-end">
                <button
                    className="text-white py-1 px-2 rounded flex items-center"
                    style={{ backgroundColor: '#002878' }}
                    onClick={onDownload}
                >
                    <div className="identity-button text-white inline-block mr-2 text-sm hidden md:block">
                        Download
                    </div>
                    <div className="text-white">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            class="bi bi-download"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                            />
                        </svg>
                    </div>
                    {props.locked && (
                        <div className="ml-2 text-white">
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                class="bi bi-lock-fill"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                                />
                            </svg>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, { setLoginRedirect, setResourceDownload })(
    LogoWithDownload
);
