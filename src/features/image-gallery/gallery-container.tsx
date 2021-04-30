import React, {Fragment} from 'react';
import Gallery from "./gallery";
import {useGallery} from "./use-gallery-hook";
import {observer} from "mobx-react-lite";
import Header from "../common/Header";

const GalleryContainer = observer(() => {

    // All event handlers or utilities are encapsulated in useGallery hook.
    const {images, toggleAsFavourite, onVoteDown, onVoteUp} = useGallery()

    return (
        <Fragment>
            <Header title={'Photo Gallery'}/>
            <Gallery items={images} onVoteUp={onVoteUp} onVoteDown={onVoteDown} onToggleFavourite={toggleAsFavourite}/>
        </Fragment>
    );
});


export default GalleryContainer;