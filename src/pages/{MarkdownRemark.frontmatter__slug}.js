import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/page';

export default function Template({
    location,
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    console.log(location);
    return (
        <Layout location={location}>
            <div>
                <div>
                    <h1 className="text-3xl bold mb-10">{frontmatter.title}</h1>
                    <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
        </Layout>
    );
}
export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                slug
                title
            }
        }
    }
`;
