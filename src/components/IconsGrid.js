import React from 'react';
import icons from './IcoMoon-Ultimate.json';
import _join from 'lodash/join';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';

import {
    setLoginRedirect,
    setResourceDownload,
    unsetLoginRedirect,
    unsetResourceDownload,
    showOktaLogin,
} from '../actions/identityActions';

const mapStateToProps = (store) => {
    return {
        isAuthenticated: store.identity.isAuthenticated,
        loginRedirect: store.identity.loginRedirect,
        resourceDownload: store.identity.resourceDownload,
    };
};

export default connect(mapStateToProps, {
    setLoginRedirect,
    setResourceDownload,
    unsetLoginRedirect,
    unsetResourceDownload,
    showOktaLogin,
})(
    class IconGrid extends React.Component {
        constructor(props) {
            super(props);

            this.state = { filter: '' };
        }

        componentDidMount = () => {
            if (!this.props.isAuthenticated) {
                // props.showOktaLogin();
                // props.setLoginRedirect('/design-elements/icons');
                localStorage.setItem('loginRedirect', window.location.pathname);
                navigate('/account');
            }
        };

        onFilter = (event) => {
            this.setState({
                filter: event.target.value,
            });
        };

        render() {
            if (this.props.isAuthenticated) {
                let iconsToProcess = [];

                icons.icons.forEach((icon, i) => {
                    let newIcon = icon;
                    newIcon.name = icons.selection[i].name;

                    iconsToProcess.push(newIcon);
                });

                if (this.state.filter) {
                    iconsToProcess = icons.icons.filter(
                        (icon, i) =>
                            _join(icon.tags, '').includes(this.state.filter) ||
                            icons.selection[i].name.includes(this.state.filter)
                    );
                }

                return (
                    <>
                        <div>
                            <div className="flex flex-col mb-4 md:w-full items-end">
                                <div>
                                    <input
                                        className="border py-2 px-3 text-grey-darkest"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Start typing to filter..."
                                        onChange={this.onFilter}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-8 gap-x-4">
                                {iconsToProcess.map((icon, i) => {
                                    return (
                                        <div className="icon" key={i} tabindex="0">
                                            <div
                                                className="rounded p-4 text-center"
                                                style={{ backgroundColor: '#f8f9fa' }}
                                            >
                                                <div>
                                                    <svg
                                                        width="32"
                                                        height="32"
                                                        viewBox={`0 0 1024 1024`}
                                                        className="w-full"
                                                        fill="#333"
                                                    >
                                                        {icon.paths.map((path) => (
                                                            <path d={path} />
                                                        ))}
                                                    </svg>
                                                </div>
                                                <div
                                                    className="flex justify-between p-2 icon-download"
                                                    style={{ fontSize: '0.5rem' }}
                                                >
                                                    <div
                                                        style={{ color: '#6c757d' }}
                                                        className="flex"
                                                    >
                                                        <div>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="14"
                                                                height="14"
                                                                fill="currentColor"
                                                                class="bi bi-arrow-down-short"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <a
                                                                className="cursor-pointer"
                                                                href={`/icons/Ultimate/SVG/${icon.name}.svg`}
                                                                download
                                                            >
                                                                SVG
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{ color: '#6c757d' }}
                                                        className="flex"
                                                    >
                                                        <div>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="14"
                                                                height="14"
                                                                fill="currentColor"
                                                                class="bi bi-arrow-down-short"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <a
                                                                className="cursor-pointer"
                                                                href={`/icons/Ultimate/PNG/64px/${icon.name}.png`}
                                                                download
                                                            >
                                                                PNG
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                );
            }
            return <div />;
        }
    }
);
