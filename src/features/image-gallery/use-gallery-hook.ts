import {useStore} from "../../core/stores/store";
import {SaveAsFavouritePayload} from "../../core/models/cat";
import {useEffect} from "react";

export const useGallery = ()=>{
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

    return {images, onVoteUp, onVoteDown, toggleAsFavourite}
}