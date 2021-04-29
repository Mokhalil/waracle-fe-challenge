import {Formik} from 'formik';
import React, {Fragment, useState} from 'react';
import {CatUploadForm} from '../../core/models/cat';
import {useStore} from "../../core/stores/store";
import {useHistory} from "react-router";
import {imageUploadFormSchema} from './image-upload-form-validation';

const ImageUploadForm = () => {
    const store = useStore();
    const [initial] = useState(new CatUploadForm())
    const [file, setFile] = useState<File>();
    const [error, setError]=useState();
    const history = useHistory();
    const onImageDrop = (e: any, formik: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
            formik.getFieldHelpers('image').setValue(e.target.files[0])
        }
    }
    const onFormSubmit = (values: any) => {
        if (file)
            store.catStore.uploadImage(file).then(()=>history.push('/')).catch((err:any)=>{
                console.log(JSON.stringify(err.data))
                setError(err.message)
            });
    }
    return (
        <div>
            <Formik
                onSubmit={onFormSubmit}
                initialValues={initial}
                validationSchema={imageUploadFormSchema}
            >
                {
                    (formik) => (
                        <Fragment>
                            <div className="flex mb-4">
                                <h1 className="flex-1 text-2xl font-bold text-gray-900">Upload photo</h1>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div><input type="file" name="image" id="image"
                                            onChange={(e) => onImageDrop(e, formik)}/>
                                    {formik.errors.image && formik.touched.image &&
                                    <p className="mt-2 text-sm text-red-600">{formik.errors.image}.</p>}
                                    {error &&
                                        <p className="mt-2 text-sm text-red-600">{error}.</p>}
                                </div>
                                <div className={'mt-4'}>
                                    <button type="submit"
                                            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Upload
                                    </button>
                                    <button type="submit"
                                            onClick={() => history.push('/')}
                                            className="inline-flex ml-4 items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </Fragment>
                    )
                }
            </Formik>

        </div>
    );
};

export default ImageUploadForm;