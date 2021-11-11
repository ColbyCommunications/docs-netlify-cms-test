import algoliasearch from 'algoliasearch/lite';
import { default as React, useState, useMemo } from 'react';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

const searchIndices = [{ name: `Identity Site`, title: `Pages` }];

export default function Search({ indices }) {
    const [query, setQuery] = useState();
    const [hasFocus, setFocus] = useState(false);
    const searchClient = useMemo(
        () =>
            algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
        []
    );

    return (
        <InstantSearch
            searchClient={searchClient}
            indexName={searchIndices[0].name}
            onSearchStateChange={({ query }) => setQuery(query)}
        >
            <div className="search-screen h-screen" style={{ zIndex: '-1' }}>
                <div className="container mx-auto mt-8 px-4">
                    <div className="mb-2">
                        <div className="text-2xl font-bold mb-4">Search:</div>
                        <div>
                            <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
                        </div>
                    </div>
                    <div className="results">
                        <SearchResult
                            show={query && query.length > 0 && hasFocus}
                            indices={searchIndices}
                        />
                    </div>
                </div>
            </div>
            <Configure ruleContexts={['identity_site']} />
        </InstantSearch>
    );
}
