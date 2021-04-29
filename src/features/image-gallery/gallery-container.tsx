import React, {Fragment} from 'react';
import Gallery from "./gallery";
import {useGallery} from "./use-gallery-hook";
import {observer} from "mobx-react-lite";

const GalleryContainer = observer(() => {
    const {images,toggleAsFavourite, onVoteDown,onVoteUp} = useGallery()
    return (
        <Fragment>
            <Gallery items={images} onVoteUp={onVoteUp} onVoteDown={onVoteDown} onToggleFavourite={toggleAsFavourite} />
        </Fragment>
    );
});


export default GalleryContainer;