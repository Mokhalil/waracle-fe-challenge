import {Formik} from 'formik';
import React, {Fragment, useState} from 'react';
import {CatUploadForm} from '../../core/models/cat';
import {useStore} from "../../core/stores/store";

const ImageUploadForm = () => {
    const store = useStore();
    const [initial] = useState(new CatUploadForm())
    const [file, setFile] = useState<File>();
    const onImageDrop = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
            console.log(e.target.files[0])
        }
    }
    const onFormSubmit = (values: any) => {
        if (file)
            store.catStore.uploadImage(file);
    }
    return (
        <div>
            <Formik
                onSubmit={onFormSubmit}
                initialValues={initial}
            >
                {
                    (formik) => (
                        <Fragment>
                            <form onSubmit={formik.handleSubmit}>
                                <input type="file" name="image" id="image" onChange={onImageDrop}/>
                                <button type={'submit'}>Upload</button>
                            </form>
                        </Fragment>
                    )
                }
            </Formik>

        </div>
    );
};

export default ImageUploadForm;