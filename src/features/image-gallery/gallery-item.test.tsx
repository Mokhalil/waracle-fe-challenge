import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import GalleryItem, {GalleryItemScoreStyle} from "./gallery-item";
import {imageWithNegativeScore, imageWithNoScore, imageWithPositive, imageWithScoreZero, onFavouriteToggleMock, onVoteDownMock, onVoteUpMock } from "./image-gallery-test-helper";

describe('gallery-item', () => {


    it('should display a warning message when an empty image is passed in', () => {
        const image = undefined;
        const component = <GalleryItem
            item={image}
            onToggleFavourite={onFavouriteToggleMock}
            onVoteUp={onVoteUpMock}
            onVoteDown={onVoteDownMock}/>

        render(component)
        expect(screen.getByText('Gallery item cannot be empty')).toBeInTheDocument()
    })
    it('should display the image when a proper image is passed in', () => {
        const component = <GalleryItem
            item={imageWithNoScore}
            onToggleFavourite={onFavouriteToggleMock}
            onVoteUp={onVoteUpMock}
            onVoteDown={onVoteDownMock}/>
        render(component)
        expect(screen.getAllByRole('img')).toHaveLength(1)
    })
    it('should display action bar with 3 buttons when proper image is passed', () => {

        const component = <GalleryItem
            item={imageWithScoreZero}
            onToggleFavourite={onFavouriteToggleMock}
            onVoteUp={onVoteUpMock}
            onVoteDown={onVoteDownMock}/>
        render(component)

        expect(screen.getAllByRole('button')).toHaveLength(3)
    })
    it('should display score when a positive score is passed', () => {
        const component = <GalleryItem
            item={imageWithPositive}
            onToggleFavourite={onFavouriteToggleMock}
            onVoteUp={onVoteUpMock}
            onVoteDown={onVoteDownMock}/>
        const {container} = render(component)

        expect(screen.getAllByTestId('positive_score')).toHaveLength(1);
        expect(container.querySelector(`[class='${GalleryItemScoreStyle.positive}']`)).toBeTruthy();
        expect(screen.queryAllByTestId('negative_score')).toHaveLength(0);
    })
    it('should display score when a negative score is passed', () => {

        const component = <GalleryItem
            item={imageWithNegativeScore}
            onToggleFavourite={onFavouriteToggleMock}
            onVoteUp={onVoteUpMock}
            onVoteDown={onVoteDownMock}/>
        const {container} = render(component)

        expect(screen.getAllByTestId('negative_score')).toHaveLength(1);
        expect(container.querySelector(`[class='${GalleryItemScoreStyle.negative}']`)).toBeTruthy();
        expect(screen.queryAllByTestId('positive_score')).toHaveLength(0);
    })
    it('should note display score when a zero score is passed', () => {

        const component = <GalleryItem
            item={imageWithScoreZero}
            onToggleFavourite={onFavouriteToggleMock}
            onVoteUp={onVoteUpMock}
            onVoteDown={onVoteDownMock}/>
        const {container} = render(component)

        expect(screen.queryByTestId('negative_score')).toBeFalsy();
        expect(screen.queryByTestId('positive_score')).toBeFalsy();
    })
    it('should invoke onVoteUp when image votted up', () => {
        const image = {
            "breeds": [],
            "id": "JtCzy5eNG",
            "url": "https://cdn2.thecatapi.com/images/JtCzy5eNG.jpg",
            "width": 1125,
            "height": 749,
            "sub_id": "mk",
            "created_at": "2021-04-30T13:08:47.000Z",
            "original_filename": "IMG_89F02B71943F-1.jpeg",
            "breed_ids": null,
            "score": 0
        }

        const component = <GalleryItem
            item={imageWithScoreZero}
            onToggleFavourite={onFavouriteToggleMock}
            onVoteUp={onVoteUpMock}
            onVoteDown={onVoteDownMock}/>

        const {container} = render(component)
        fireEvent.click(screen.getByTestId('vote-up'))
        expect(onVoteUpMock.mock.calls.length).toBe(1);
        expect(onVoteDownMock.mock.calls.length).toBe(0);
        expect(onFavouriteToggleMock.mock.calls.length).toBe(0);
    })
    it('should invoke onVoteDown when image votted down', () => {


        const component = <GalleryItem
            item={imageWithScoreZero}
            onToggleFavourite={onFavouriteToggleMock}
            onVoteUp={onVoteUpMock}
            onVoteDown={onVoteDownMock}/>

        const {container} = render(component)
        fireEvent.click(screen.getByTestId('vote-down'))
        expect(onVoteUpMock.mock.calls.length).toBe(0);
        expect(onVoteDownMock.mock.calls.length).toBe(1);
        expect(onFavouriteToggleMock.mock.calls.length).toBe(0);

    })
    it('should invoke onToggleFavourite when images was made favourite', () => {


        const component = <GalleryItem
            item={imageWithScoreZero}
            onToggleFavourite={onFavouriteToggleMock}
            onVoteUp={onVoteUpMock}
            onVoteDown={onVoteDownMock}/>

        const {container} = render(component)
        fireEvent.click(screen.getByTestId('favourite-toggle'))
        expect(onVoteUpMock.mock.calls.length).toBe(0);
        expect(onVoteDownMock.mock.calls.length).toBe(0);
        expect(onFavouriteToggleMock.mock.calls.length).toBe(1);

    })

})