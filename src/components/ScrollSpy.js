import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

function getIds(items) {
    return items.reduce((acc, item) => {
        if (item.url) {
            // url has a # as first character, remove it to get the raw CSS-id
            acc.push(item.url.slice(1));
        }

        if (item.items) {
            acc.push(...getIds(item.items));
        }

        return acc;
    }, []);
}
function useActiveId(itemIds) {
    const [activeId, setActiveId] = useState(`test`);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: `5% 30% -90% 30%`, threshold: 0.35 }
        );
        itemIds.forEach((id) => {
            observer.observe(document.getElementById(id));
        });
        return () => {
            itemIds.forEach((id) => {
                observer.unobserve(document.getElementById(id));
            });
        };
    }, [itemIds]);

    return activeId;
}
function renderItems(items, activeId) {
    return (
        <ul className="relative">
            {items.map((item) => {
                return (
                    <li key={item.url} className="relative">
                        <Link
                            to={item.url}
                            className={`${activeId === item.url.slice(1) ? 'is-current' : ''}`}
                        >
                            {item.title}
                        </Link>
                        {item.items && renderItems(item.items, activeId)}
                    </li>
                );
            })}
        </ul>
    );
}

const TableOfContents = (props) => {
    const idList = getIds(props.tableOfContents.items[0].items);
    const activeId = useActiveId(idList);

    return (
        <ul className="automenu relative">
            {renderItems(props.tableOfContents.items[0].items, activeId)}
        </ul>
    );
};

const ScrollSpy = (props) => {
    const ucwords = (str) => {
        let string = str.toLowerCase();
        return string.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function (s) {
            return s.toUpperCase();
        });
    };
    console.log(props);

    return (
        <>
            <ul className="pl-8 md:pl-0">
                {props.siblings.map((sibling, i) => {
                    return (
                        <li
                            className={`text-2xl md:text-base ${
                                sibling.node.frontmatter.slug === props.currentPage.frontmatter.slug
                                    ? 'current-page'
                                    : ''
                            }`}
                            key={i}
                        >
                            <Link to={`/${sibling.node.frontmatter.slug}`}>
                                {ucwords(sibling.node.frontmatter.title.replace('-', ' '))}
                            </Link>
                            {!props.isHomepage &&
                                sibling.node.frontmatter.slug ===
                                    props.currentPage.frontmatter.slug && (
                                    <div
                                        className="inner"
                                        dangerouslySetInnerHTML={{
                                            __html: props.currentPage.tableOfContents,
                                        }}
                                    />
                                )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
export default ScrollSpy;
