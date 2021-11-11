import React from 'react';
// import { Helmet } from 'react-helmet';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import ScrollSpy from '../components/ScrollSpy';

// import { graphql, StaticQuery } from 'gatsby';
// import ScrollTopArrow from '../components/BackToTop';

// const LayoutWithQuery = (props) => (
//     <StaticQuery
//         query={graphql`
//             query getPageData {
//                 allPageTree {
//                     nodes {
//                         pathRaw
//                         name
//                         isRootPage
//                         children {
//                             ... on PageTree {
//                                 id
//                                 name
//                                 pathRaw
//                             }
//                         }
//                     }
//                 }
//                 site {
//                     siteMetadata {
//                         title
//                     }
//                 }
//             }
//         `}
//         render={(data) => <InnerLayout data={data} {...props} />}
//     />
// );

// const InnerLayout = (props) => {
//     const parent = props.data.allPageTree.nodes.find((node) => {
//         return node.pathRaw === '/' + props.location.pathname.split('/')[1] + '/';
//     });
//     const node = props.data.allMdx.nodes.find(
//         (node) =>
//             node.slug === props.pageContext.frontmatter.title.toLowerCase().replace(/\s/g, '-')
//     );
//     let headings = [];
//     if (node) {
//         headings = node.headings;
//     }

//     let headingsMassaged = [];

//     headings.forEach((heading) => {
//         headingsMassaged.push(heading.value.replace(/\s/g, '-'));
//     });

//     return (
//         <>
//             <Helmet>
//                 <title>{data.site.siteMetadata.title} | Colby College</title>
//                 <link rel="stylesheet" href="https://use.typekit.net/djf7stt.css" />
//             </Helmet>

//             <Navbar title={data.site.siteMetadata.title} />
//             <main style={{ marginTop: '116px' }}>
//                 <div
//                     className={`container mx-auto pt-8 mb-8 px-4 ${props.pageContext.frontmatter.title
//                         .toLowerCase()
//                         .replace(/\s/g, '-')}-page`}
//                 >
//                     <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4">
//                         <div className="col-span-1 hidden lg:block md:col-span-3">
//                             <div className="sticky inner-toc" style={{ top: '9rem' }}>
//                                 <div className="mt-6">
//                                     <ScrollSpy
//                                         siblings={parent.children}
//                                         tableOfContents={node.tableOfContents}
//                                         currentPage={props.path}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-span-1 md:col-span-8 lg:col-span-9 content-container">
//                             stuff
//                         </div>
//                     </div>
//                 </div>
//             </main>
//             <Footer {...props} />
//             <ScrollTopArrow />
//         </>
//     );
// };

export default function Layout({ children }) {
    return (
        <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
            <div>
                <div>links</div>
                <div>{children}</div>
            </div>
        </div>
    );
}
