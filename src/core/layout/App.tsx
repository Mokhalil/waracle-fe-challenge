import React from 'react';
import Cats from '../../features/Cats';
import ImageUploadForm from "../../features/upload-image/image-upload-form";

function App() {
  return (
    <div>
      <ImageUploadForm/>
      <Cats/>
    </div>
  );
}

export default App;
