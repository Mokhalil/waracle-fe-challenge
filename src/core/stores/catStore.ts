import _ from "lodash";
import {makeAutoObservable} from "mobx";
import agent from "../api/agent";
import {Cat, CatScore, SaveAsFavouritePayload} from "../models/cat";

export default class CatStore {
    imagesRegistery = new Map<string, Cat>()
    favouritesRegistery = new Map<string, any>()
    scoresRegistery = new Map<string, any>()

    constructor() {
        makeAutoObservable(this);
    }

    get images() {
        const images=  Array.from(this.imagesRegistery.values())
        const enriched = _.map(images,(image)=>{
            const isFavourite = this.isInFavourites(image.id);
            const score = this.scoresRegistery.get(image.id)
            return {...image,score:score, isFavourite:isFavourite}
        })
        return enriched;
    }

    //todo: handle server side error
    uploadImage = async (file: File) => {
        await agent.Cats.uploadPhoto(file)
    }

    loadMyImages = async () => {
        this.imagesRegistery.clear()
        const images: any[] = await agent.Cats.loadMyImages();
        images.forEach((image) => this.imagesRegistery.set(image.id, image))
    }

    loadMyFavourites = async () => {
        this.favouritesRegistery.clear()
        const favourites: any[] = await agent.Cats.loadFavourites();
        favourites.forEach((image) => this.favouritesRegistery.set(image.image_id, image))
    }

    loadUserData = async () => {
        //todo: use promise.all
        await this.loadVotes();
        await this.loadMyImages();
        await this.loadMyFavourites()
    }

    loadVotes = async () => {
        const votes: any[] = await agent.Cats.listVotes();
        votes.forEach((vote) => {
            if (this.scoresRegistery.has(vote.image_id)) {
                const currentScore = this.scoresRegistery.get(vote.image_id)
                if (vote.value == 1)
                    this.scoresRegistery.set(vote.image_id, {...currentScore, up: currentScore.up + 1})
                else
                    this.scoresRegistery.set(vote.image_id, {...currentScore, down: currentScore.down + 1})
            } else {
                const score: CatScore = {
                    image_id: vote.image_id,
                    up: (vote.value == 1) ? 1 : 0,
                    down: (vote.value == 1) ? 1 : 0
                }
                this.scoresRegistery.set(score.image_id, score);
            }
        })
    }

    saveAsFavourite = async (request: SaveAsFavouritePayload) => {
        await agent.Cats.saveAsFavourite(request);
        await this.loadMyFavourites();
    }

    removeFromFavourites = async (id: string) => {
        await agent.Cats.removeFavourite(id)
        await this.loadMyFavourites();
    }

    voteUp = async (id: string) => await agent.Cats.vote({image_id: id, value: 1})
    voteDown = async (id: string) => await agent.Cats.vote({image_id: id, value: 0})
    isInFavourites = (id: string) => this.favouritesRegistery.has(id);
    getFavouriteId = (id: string) => this.favouritesRegistery.get(id).id;
}