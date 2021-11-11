import { Link } from 'gatsby';
import { default as React } from 'react';
import {
    connectStateResults,
    Highlight,
    Hits,
    Index,
    Snippet,
    QueryRuleCustomData,
} from 'react-instantsearch-dom';

import { navigate } from 'gatsby';

const Banner = () => (
    <QueryRuleCustomData>
        {({ items }) => {
            console.log(items);
            if (items.length) {
                return (
                    <a href={items[0].link}>
                        <img src={`/images/Banners/${items[0].promo_banner}.jpg`} />
                    </a>
                );
            } else {
                return null;
            }
        }}
    </QueryRuleCustomData>
);

const HitCount = connectStateResults((props) => {
    const hitCount = props.searchResults && props.searchResults.nbHits;

    return props.searchResults ? (
        <div className="HitCount">
            {hitCount} result{hitCount !== 1 ? `s` : ``}
            {props.searchResults.query.length > 0 ? ` for "${props.searchResults.query}"` : ''}
        </div>
    ) : null;
});

const PageHit = (props) => {
    console.log(props);
    return (
        <div className="mb-6 search-result">
            <div className="text-2xl mb-2 font-semi  bold underline">
                <Link to={props.hit.uri}>
                    <h4>
                        <Highlight attribute="title" hit={props.hit} tagName="mark" />
                    </h4>
                </Link>
            </div>
            <div>
                <Snippet attribute="excerpt" hit={props.hit} tagName="mark" />
            </div>
            <div className="read-more cursor-pointer mt-2" style={{ color: '#d95900' }}>
                <a
                    onClick={() => {
                        document.body.classList.remove('no-scroll');
                        navigate(props.hit.uri);
                    }}
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

const HitsInIndex = ({ index }) => (
    <Index indexName={index.name}>
        <div className="mb-10">
            <HitCount />
        </div>
        <div className="mb-10">
            <Banner />
        </div>
        <Hits className="Hits" hitComponent={PageHit} />
    </Index>
);

const SearchResult = ({ indices, className }) => (
    <div className={className}>
        {indices.map((index) => (
            <HitsInIndex index={index} key={index.name} />
        ))}
    </div>
);

export default SearchResult;
