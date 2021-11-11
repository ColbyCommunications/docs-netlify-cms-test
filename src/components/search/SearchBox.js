import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

export default connectSearchBox(({ refine, currentRefinement, className, onFocus }) => {
    console.log(currentRefinement);
    return (
        <form className="relative">
            <input
                className="SearchInput border py-2 px-3 text-grey-darkest w-full"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => refine(e.target.value)}
                value={currentRefinement}
                onFocus={onFocus}
            />
            {currentRefinement && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16px"
                    viewBox="0 0 24 24"
                    width="16px"
                    fill="#002878"
                    className="absolute"
                    style={{ top: '13px', right: '10px', cursor: 'pointer' }}
                    onClick={(e) => refine('')}
                >
                    <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                </svg>
            )}
        </form>
    );
});
