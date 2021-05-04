export const onVoteUpMock = jest.fn((id: string) => {
})
export const onVoteDownMock = jest.fn((id: string) => {
})
export const onFavouriteToggleMock = jest.fn((id: string, subId: string) => {
})


export const imageWithNoScore = {
    "breeds": [],
    "id": "JtCzy5eNG",
    "url": "https://cdn2.thecatapi.com/images/JtCzy5eNG.jpg",
    "width": 1125,
    "height": 749,
    "sub_id": "mk",
    "created_at": "2021-04-30T13:08:47.000Z",
    "original_filename": "IMG_89F02B71943F-1.jpeg",
    "breed_ids": null
}

export const imageWithScoreZero = {
    "breeds": [],
    "id": "JtCzy5xNG",
    "url": "https://cdn2.thecatapi.com/images/JtCzy5eNG.jpg",
    "width": 1125,
    "height": 749,
    "sub_id": "mk",
    "created_at": "2021-04-30T13:08:47.000Z",
    "original_filename": "IMG_89F02B71943F-1.jpeg",
    "breed_ids": null,
    "score": {
        up: 10,
        down: 10
    }
}

export const imageWithPositive = {
    "breeds": [],
    "id": "JtCzy5fNG",
    "url": "https://cdn2.thecatapi.com/images/JtCzy5eNG.jpg",
    "width": 1125,
    "height": 749,
    "sub_id": "mk",
    "created_at": "2021-04-30T13:08:47.000Z",
    "original_filename": "IMG_89F02B71943F-1.jpeg",
    "breed_ids": null,
    "score": {
        up: 10,
        down: 5
    }
}

export const imageWithNegativeScore = {
    "breeds": [],
    "id": "JtCzy5mNG",
    "url": "https://cdn2.thecatapi.com/images/JtCzy5eNG.jpg",
    "width": 1125,
    "height": 749,
    "sub_id": "mk",
    "created_at": "2021-04-30T13:08:47.000Z",
    "original_filename": "IMG_89F02B71943F-1.jpeg",
    "breed_ids": null,
    "score": {
        up: 5,
        down: 10
    }
}

export const images = [imageWithScoreZero, imageWithNegativeScore, imageWithPositive, imageWithNoScore]

