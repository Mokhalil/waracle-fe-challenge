import React, {Fragment, useEffect} from 'react';
import {useStore} from "../core/stores/store";
import {observer} from "mobx-react-lite";
import {SaveAsFavouritePayload} from "../core/models/cat";


const Cats = observer(() => {
    const store = useStore();
    const {
        images,
        loadUserData,
        saveAsFavourite,
        isInFavourites,
        removeFromFavourites,
        getFavouriteId,
        voteUp,
        voteDown
    } = store.catStore

    const toggleAsFavourite = async (id: string, subId: string) => {
        let payload: SaveAsFavouritePayload | undefined = undefined

        if (!isInFavourites(id)) {
            payload = {image_id: id, sub_id: subId}
            await saveAsFavourite(payload)
            return;
        }
        await removeFromFavourites(getFavouriteId(id))
    }

    const onVoteUp = async (id: string) => {
        await voteUp(id)
    }

    const onVoteDown = async (id: string) => {
        await voteDown(id)
    }

    useEffect(() => {
        loadUserData().then(() => {

        })
    }, [])

    return (
        <div>
            {
                images.map((image) => <span key={image.id}>
                    <img src={image.url} onClick={() => toggleAsFavourite(image.id, image.sub_id)}/>
                    <span>{image.score.up - image.score.down }</span>
                    <span>{(image.isFavourite)?"Fav":"Not fav"}</span>
                    <button type={'button'} onClick={(e:any) => onVoteUp(image.id)}>+</button>
                    <button type={'button'} onClick={(e:any) => onVoteDown(image.id)}>-</button>
                </span>)
            }
        </div>
    );
});

export default Cats;