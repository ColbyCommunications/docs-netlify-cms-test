import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/page';

const IndexPage = ({ location, data }) => <Layout location={location}>index page content</Layout>;

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                    }
                    html
                }
            }
        }
    }
`;

export default IndexPage;
