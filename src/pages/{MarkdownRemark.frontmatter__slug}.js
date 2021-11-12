import React from 'react';
import { graphql } from 'gatsby';
import ScrollSpy from '../components/ScrollSpy';
import Layout from '../layouts/page';

export default function Template(props) {
    const { currentPage } = props.data;
    const { frontmatter, html } = currentPage;

    const node = currentPage;

    let headings = [];
    if (node) {
        headings = node.headings;
    }

    return (
        <Layout>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8">
                <div
                    id="toc"
                    className="col-span-1 hidden lg:block md:col-span-2 border-r border-gray-200"
                >
                    <div>
                        <div className="text-2xl bold underline">
                            {props.data.site.siteMetadata.title}
                        </div>
                    </div>
                    <div className="sticky inner-toc" style={{ top: '8rem' }}>
                        <div className="mt-6">
                            <ScrollSpy
                                siblings={props.data.allMarkdownRemark.edges}
                                tableOfContents={node.tableOfContents}
                                currentPage={node}
                                isHomepage={props.location.pathname === '/'}
                            />
                        </div>
                    </div>
                </div>
                <div id="content-container" className="col-span-1 md:col-span-10 lg:col-span-10">
                    <div>
                        <div>
                            <h1 className="text-3xl bold mb-10">{frontmatter.title}</h1>
                            <div
                                className="blog-post-content"
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export const pageQuery = graphql`
    query getPageData($id: String) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                    }
                    headings {
                        value
                    }
                    tableOfContents
                }
            }
        }
        currentPage: markdownRemark(id: { eq: $id }) {
            tableOfContents
            headings {
                value
            }
            frontmatter {
                title
                slug
            }
            html
        }
    }
`;
