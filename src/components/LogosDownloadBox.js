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

    if (props.data.value === 'colbyLogotype') {
        return (
            <div {...props.innerProps} style={style}>
                {props.data.label}
            </div>
        );
    }

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
    class LogosDownloadBox extends React.Component {
        constructor(props) {
            super(props);

            this.state = { selectedLogo: null };
        }

        componentDidMount = () => {
            if (this.props.isAuthenticated && this.props.resourceDownload) {
                ResourceDownload(this.props.resourceDownload);
                this.props.unsetResourceDownload();
                this.props.unsetLoginRedirect();
            }
        };

        onLogoSelect = (event) => {
            this.setState({
                selectedLogo: event,
            });
        };

        onDownload = () => {
            // const navigate = useNavigate();

            if (!this.props.isAuthenticated && this.state.selectedLogo.value !== 'colbyLogotype') {
                this.props.setLoginRedirect(window.location);
                this.props.setResourceDownload(this.state.selectedLogo.value);
                window.localStorage.setItem('resourceDownload', this.state.selectedLogo.value);
                window.localStorage.setItem('loginRedirect', window.location.pathname);
                navigate(`/account`);
            } else {
                ResourceDownload(this.state.selectedLogo.value);
            }
        };

        render() {
            const options = [
                { value: 'colbyLogotype', label: 'Colby Logotype' },
                { value: 'athletics', label: 'Athletics and Recreation' },
                { value: 'davisConnects', label: 'DavisConnects' },
                { value: 'libraries', label: 'Libraries' },
                { value: 'boardOfTrustees', label: 'Board of Trustees' },
                { value: 'goldfarb', label: 'Goldfarb Center for Public Policy ' },
                { value: 'dareNorthward', label: 'Dare Northward' },
                { value: 'oakInstitute', label: 'Oak Institute for Human Rights' },
                { value: 'jewishLife', label: 'Center for Small Town Jewish Life' },
                { value: 'buckLab', label: 'Buck Lab for Environment and Climate Change' },
                { value: 'sustainableColby', label: 'Sustainable Colby' },
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
                <div className="p-4 mb-4 text-white" style={{ backgroundColor: '#002878' }}>
                    <div className="mb-2 font-semibold">Download Logos</div>
                    <div className="mb-4 text-sm">
                        Please only use official Colby logos in your projects. Select a logo to
                        download from the drop-down menu below.
                    </div>
                    <div>
                        <Select
                            options={options}
                            placeholder="Select a logo"
                            styles={colourStyles}
                            className="logo-select-container"
                            classNamePrefix="logo-select"
                            components={{ Option: CustomOption }}
                            onChange={this.onLogoSelect}
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
            );
        }
    }
);
