import React from 'react';
import Cats from '../../features/Cats';
import ImageUploadForm from "../../features/upload-image/image-upload-form";
import Shell from './shell';
import "tailwindcss/tailwind.css"
import GalleryContainer from "../../features/image-gallery/gallery-container";

function App() {
    return (
        <div>
            <Shell><GalleryContainer/></Shell>
            <ImageUploadForm/>
            <Cats/>
        </div>
    );
}

export default App;
