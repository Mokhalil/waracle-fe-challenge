import React, {useEffect} from 'react';
import GalleryItem from "./gallery-item";
import {SaveAsFavouritePayload} from "../../core/models/cat";
import EmptyGallery from './empty-gallery';

interface GalleryProps{
    items : any[],
    onVoteUp : (id:string)=>void,
    onVoteDown : (id:string)=>void,
    onToggleFavourite : (id: string, subId: string)=>void
}

const Gallery = ({items, onVoteUp, onVoteDown,onToggleFavourite}:GalleryProps) =>
{
    if(!items || items.length==0)
        return <EmptyGallery/>
    return (
        <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="sr-only">Recently viewed</h2>
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                    items.map((item)=><GalleryItem item={item} onVoteUp={onVoteUp} onVoteDown={onVoteDown} onToggleFavourite={onToggleFavourite} key={item.id}/>)
                }
            </ul>
        </section>
    );
};



export default Gallery;