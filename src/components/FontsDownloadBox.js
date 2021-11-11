import React from 'react';
import Select from 'react-select';

import { ResourceDownload } from '../helpers/_helpers';
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

const CustomOption = (props) => {
    const style = {
        borderBottom: '1px solid #ddd',
        color: '#333',
        padding: '10px',
        backgroundColor: props.isFocused ? '#f3f3f3' : null,
    };

    return (
        <div {...props.innerProps} style={style} className="flex items-center">
            <div>
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
            <div className="ml-2">{props.data.label}</div>
        </div>
    );
};

export default connect(mapStateToProps, {
    setLoginRedirect,
    setResourceDownload,
    unsetLoginRedirect,
    unsetResourceDownload,
    showOktaLogin,
})(
    class FontsDownloadBox extends React.Component {
        constructor(props) {
            super(props);

            this.state = { selectedFont: null };
        }

        componentDidMount = () => {
            if (this.props.isAuthenticated && this.props.resourceDownload) {
                ResourceDownload(this.props.resourceDownload);
                this.props.unsetResourceDownload();
                this.props.unsetLoginRedirect();
            }
        };

        onFontSelect = (event) => {
            this.setState({
                selectedFont: event,
            });
        };

        onDownload = () => {
            // const navigate = useNavigate();
            if (!this.props.isAuthenticated) {
                this.props.setLoginRedirect(window.location);
                this.props.setResourceDownload(this.state.selectedFont.value);
                window.localStorage.setItem('resourceDownload', this.state.selectedFont.value);
                window.localStorage.setItem('loginRedirect', window.location.pathname);
                // this.props.showOktaLogin();
                navigate(`/account`);
            } else {
                ResourceDownload(this.state.selectedFont.value);
            }
        };

        render() {
            const options = [
                { value: 'Janson', label: 'Janson Text' },
                { value: 'FranklinGothic', label: 'ITC Franklin Gothic' },
            ];

            const colourStyles = {
                menu: (provided, state) => ({
                    ...provided,
                    borderRadius: '0px',
                }),
                option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
                    ...provided,
                    borderBottom: '1px solid #ddd',
                    color: '#333',
                    padding: '10px',
                    backgroundColor: isFocused ? '#f3f3f3' : null,
                }),
                placeholder: (styles) => ({ ...styles }),
                control: (provided, { data, isDisabled, isFocused, isSelected }) => ({
                    ...provided,
                    borderColor: isFocused && isSelected ? 'transparent' : 'transparent',
                    boxShadow: isFocused && isSelected ? 'transparent' : 'transparent',
                    borderRadius: 0,
                }),
            };

            return (
                <>
                    <div className="p-4 mb-4 text-white" style={{ backgroundColor: '#002878' }}>
                        <div className="mb-2 font-semibold">Download Our Print Fonts</div>
                        <div className="mb-4 text-sm">
                            Please only use fonts from Colby’s typographic palette for your
                            projects. For print, select a font to download from the drop-down menu
                            below.
                        </div>
                        <div>
                            <Select
                                options={options}
                                placeholder="Select a font"
                                styles={colourStyles}
                                className="logo-select-container"
                                classNamePrefix="logo-select"
                                components={{ Option: CustomOption }}
                                onChange={this.onFontSelect}
                            />
                        </div>
                        <div className="text-right mt-2 text-sm">
                            <button
                                className="text-white py-2 px-4 bg-accent hover:bg-accent-hover"
                                onClick={this.onDownload}
                            >
                                Download
                            </button>
                        </div>
                    </div>
                    <div className="flex p-2 identity-quicklink mb-4">
                        <div>
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    width: '100%',
                                }}
                                fill="#002878"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                                />
                            </svg>
                        </div>
                        <div>
                            <div className="mb-2 font-semibold">
                                Installing Fonts On Your Computer
                            </div>
                            <div className="text-sm" style={{ color: '#002878' }}>
                                <div className="flex items-center">
                                    <a
                                        className="cursor-pointer"
                                        href="https://support.apple.com/guide/font-book/install-and-validate-fonts-fntbk1000/mac#:~:text=Install%20fonts%20from%20your%20Mac,in%20the%20dialog%20that%20appears"
                                    >
                                        On a Mac
                                    </a>
                                </div>
                            </div>
                            <div className="text-sm" style={{ color: '#002878' }}>
                                <div className="flex items-center">
                                    <a
                                        className="cursor-pointer"
                                        href="https://answers.microsoft.com/en-us/windows/forum/all/install-fonts-on-windows10/89131e3f-bb59-43b3-8621-db52b9b8a213"
                                    >
                                        On PC
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
);
