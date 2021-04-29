import React from 'react';
import Cats from '../../features/Cats';
import ImageUploadForm from "../../features/upload-image/image-upload-form";
import Shell from './shell';
import "tailwindcss/tailwind.css"

function App() {
    return (
        <div>
            <Shell/>
            <ImageUploadForm/>
            <Cats/>
        </div>
    );
}

export default App;
