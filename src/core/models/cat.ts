export interface Cat {
    id: string,
    url: string,
    sub_id: string,
    created_at: string
}

export class CatUploadForm{
    image? : File = undefined
}

export type SaveAsFavouritePayload = { image_id:string,sub_id:string }
export type VotePayload = { image_id:string,sub_id?:string, value:number}
export type CatScore = {image_id:string, up:number, down:number}