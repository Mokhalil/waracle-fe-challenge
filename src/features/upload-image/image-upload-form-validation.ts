import * as yup from 'yup'
const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
];
export const imageUploadFormSchema = yup.object().shape({
    file: yup
        .mixed()
        .required("A file is required")
        .test(
            "fileSize",
            "File too large",
            value => value && value.size <= FILE_SIZE
        )
        .test(
            "fileFormat",
            "Unsupported Format",
            value => value && SUPPORTED_FORMATS.includes(value.type)
        )
})