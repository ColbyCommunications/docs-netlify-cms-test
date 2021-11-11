import React from 'react';
import { navigate } from 'gatsby';


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ``,
            results: [],
        };
    }

    getSearchResults = (query) => {
        // if (window.__LUNR__) {
        //     const results = window.__LUNR__.en.index.search(`${query}* ${query}`);
        //     return results.map(({ ref }) => window.__LUNR__.en.store[ref]);
        // }
        return [];
    };

    search = async (event) => {
        const query = event.target.value;
        const results = await this.getSearchResults(query);
        this.setState({
            results,
            query,
        });
    };

    render() {
        /*  
            <ul>
                            {this.state.results.length === 0 && <div>No results</div>}
                            {this.state.results.map((page) => (
                                <li>{page.title}</li>
                            ))}
                        </ul>
        */
        return (
            <div className="search-screen h-screen" style={{ zIndex: '-1' }}>
                <div className="container mx-auto mt-8 px-4">
                    <div className="mb-10">
                        <div className="text-2xl font-bold mb-4">Search:</div>
                        <div>
                            <Search indices={searchIndices} />
                        </div>
                        <div class="mt-2">
                            {!!this.state.results.length && this.state.query && (
                                <h2
                                    className="search-results-count"
                                    id="search-results-count"
                                    aria-live="assertive"
                                >
                                    Found {this.state.results.length} posts on "{this.state.query}"
                                </h2>
                            )}
                        </div>
                    </div>
                    <div className="results">
                        <ul>
                            {!!this.state.results.length &&
                                this.state.query &&
                                this.state.results.map((page) => (
                                    <li className="mb-6 search-result">
                                        <div
                                            className="text-2xl mb-2 font-semi  bold underline"
                                            style={{ color: '#002878' }}
                                        >
                                            <a
                                                onClick={() => {
                                                    document.body.classList.remove('no-scroll');
                                                    navigate(page.uri);
                                                }}
                                                className="cursor-pointer"
                                            >
                                                {page.title}
                                            </a>
                                        </div>
                                        <div>{page.description}</div>
                                        <div
                                            class="read-more cursor-pointer mt-2"
                                            style={{ color: '#d95900' }}
                                        >
                                            <a
                                                onClick={() => {
                                                    document.body.classList.remove('no-scroll');
                                                    navigate(page.uri);
                                                }}
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </li>
                                ))}

                            {!this.state.results.length && this.state.query && (
                                <div>No results found</div>
                            )}
                            {!this.state.results.length && !this.state.query && (
                                <div>Start typing to search</div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
