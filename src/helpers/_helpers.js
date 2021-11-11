export const ResourceDownload = (resource) => {
    if (resource === 'colbyLogotype') {
        const link = document.createElement('a');
        link.href = '/downloads/zips/colbyLogotype.zip';
        link.type = 'application/zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        const link = document.createElement('a');
        link.href = `/downloads/zips/${resource}.zip`;
        link.type = 'application/zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};
