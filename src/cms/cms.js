import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import slugify from '@sindresorhus/slugify';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

/**
 * Before saving a blog post, create and save a slug based on the title
 * if one does not already exist.
 */
CMS.registerEventListener({
    name: 'preSave',
    handler: ({ entry }) => {
        // Only process blog posts
        if (entry.get('collection') !== 'pages') return;

        // If there's already a slug, don't change it
        if (entry.getIn(['data', 'slug'], '')) return;

        // Slugify the title and save it as the slug
        const title = entry.getIn(['data', 'title'], '');
        const slug = slugify(title);
        return entry.get('data').set('slug', slug);
    },
});
