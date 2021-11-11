import React from 'react';
import _isFunction from 'lodash/isFunction';
import queryString from 'query-string';
import vendors from './vendors.json';
import { connect } from 'react-redux';
import { navigate, Link } from 'gatsby';
import Obfuscate from 'react-obfuscate';

import {
    setLoginRedirect,
    setResourceDownload,
    unsetLoginRedirect,
    unsetResourceDownload,
    showOktaLogin,
} from '../actions/identityActions';

const columns = [
    {
        name: 'name',
        label: 'Name',
        class: 'w-2/6',
        render: (value, item) => {
            if (item.website) {
                return <a href={item.website}>{value}</a>;
            }

            return value;
        },
    },
    { name: 'contact', label: 'Contact' },
    {
        name: 'contactEmail',
        label: 'Contact Email',
        class: 'text-center',
        render: (value, item) => {
            if (value) {
                return (
                    <button
                        className="text-white text-xs py-2 px-4 rounded"
                        onClick={() => (window.location = `mailto:${value}`)}
                        style={{ backgroundColor: '#002878' }}
                    >
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            class="bi bi-envelope-fill"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                            />
                        </svg>
                    </button>
                );
            }
        },
    },
    { name: 'phone', label: 'Phone', class: 'w-1/6' },
    { name: 'businessProfile', label: 'Service' },
    { name: 'state', label: 'State' },
    { name: 'specialty', label: 'Specialty', class: 'w-1/5' },
];

const categories = [
    'photography',
    'video',
    'printing',
    'graphic design',
    'audio',
    'writing',
    'web design',
    'full-service agency',
    'merchandise',
];

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
    class VendorList extends React.Component {
        constructor(props) {
            super(props);

            this.state = { selectedFilter: null, search: '' };
        }

        componentDidMount = () => {
            if (!this.props.isAuthenticated) {
                localStorage.setItem('loginRedirect', window.location.pathname);
                navigate('/account');
            } else {
                if (
                    window.location.search &&
                    'filter' in queryString.parse(window.location.search)
                ) {
                    let filter = queryString.parse(window.location.search).filter;

                    if (categories.includes(filter)) {
                        this.onFilterSelect(filter);
                    }
                }
            }
        };

        onFilterSelect = (filter) => {
            this.setState({
                selectedFilter: filter,
            });
        };
        onClear = () => {
            this.setState({
                selectedFilter: null,
            });
        };

        onSearch = (event) => {
            this.setState({
                search: event.target.value,
            });
        };

        renderTbody = () => {
            let vendorsToProcess = vendors.vendors;
            if (this.state.selectedFilter) {
                vendorsToProcess = vendorsToProcess.filter((vendor) =>
                    vendor.businessProfile.includes(this.state.selectedFilter)
                );
            }

            if (this.state.search) {
                vendorsToProcess = vendorsToProcess.filter((vendor) =>
                    vendor.specialty.toLowerCase().includes(this.state.search.toLowerCase())
                );
            }

            let rows = vendorsToProcess.map((item, index) => {
                const row = columns.map((column, index1) => {
                    const value = _isFunction(column.render)
                        ? column.render(item[column.name], item)
                        : item[column.name];

                    let className = column.class || '';

                    /* eslint-disable react/no-array-index-key */
                    return (
                        <td
                            key={index1}
                            className={`py-4 px-4 border-b border-grey-light ${className}`}
                        >
                            {value}
                        </td>
                    );
                });

                let rowClass = '';
                if (index % 2 === 0) {
                    rowClass = 'bg-gray-100';
                }

                return (
                    <tr className={rowClass} key={index}>
                        {row}
                    </tr>
                );
            });

            return rows;
        };

        render() {
            if (this.props.isAuthenticated) {
                const tbody = this.renderTbody();
                return (
                    <>
                        <div className="mt-6">
                            <p className="py-4">
                                Browse a list of <Link to="/vendors">vendors</Link> Colby has
                                successfully collaborated with on various creative and marketing
                                communications projects. If you would like another vendor included
                                please email <Obfuscate email="communicatons@colby.edu" />
                            </p>
                            <span className="mr-2">Filter by:</span>{' '}
                            {categories.map((category) => {
                                let bg = '#002878';

                                if (this.state.selectedFilter === category) {
                                    bg = '#e3d7d1';
                                }

                                return (
                                    <button
                                        style={{ textTransform: 'uppercase', backgroundColor: bg }}
                                        onClick={this.onFilterSelect.bind(null, category)}
                                        className="text-white py-1 px-2 rounded inline-block text-xs mr-2"
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                            {this.state.selectedFilter && (
                                <button
                                    style={{ textTransform: 'uppercase', backgroundColor: 'white' }}
                                    onClick={this.onClear}
                                    className="text-black py-1 px-2 rounded inline-block text-xs mr-2"
                                >
                                    clear
                                </button>
                            )}
                        </div>
                        <div style={{ overflowX: 'scroll' }}>
                            <table className="mt-2">
                                <thead className="bg-gray-100">
                                    <tr>
                                        {columns.map((column) => {
                                            if (column.name === 'specialty') {
                                                return (
                                                    <th
                                                        className="py-4 px-6 bg-white font-bold text-left text-lg text-grey-dark border-b border-grey-light"
                                                        key={column.name}
                                                    >
                                                        <div className="mb-2">{column.label}</div>
                                                        <div>
                                                            <input
                                                                className="border p-1 text-grey-darkest w-full text-sm"
                                                                placeholder="Start typing to filter..."
                                                                onChange={this.onSearch}
                                                            />
                                                        </div>
                                                    </th>
                                                );
                                            }
                                            return (
                                                <th
                                                    className="py-4 px-6 bg-white font-bold text-left text-lg text-grey-dark border-b border-grey-light"
                                                    key={column.name}
                                                >
                                                    {column.label}
                                                </th>
                                            );
                                        })}
                                    </tr>
                                </thead>
                                <tbody>{tbody}</tbody>
                            </table>
                        </div>
                    </>
                );
            }
            return <div />;
        }
    }
);
