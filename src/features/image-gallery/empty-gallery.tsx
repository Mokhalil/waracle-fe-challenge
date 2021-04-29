import React from 'react';

const EmptyGallery = () => {
    return (
        <div className={'flex justify-center items-center font-semibold text-gray-500 text-4xl mt-8 mx-auto max-w-5xl'}>
            No Images to display. Please use the upload form to add new photos
        </div>
    );
};

export default EmptyGallery;