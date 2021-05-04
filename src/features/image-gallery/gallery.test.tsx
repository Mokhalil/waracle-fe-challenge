import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import GalleryItem, {GalleryItemScoreStyle} from "./gallery-item";
import {images, imageWithNegativeScore, imageWithNoScore, imageWithPositive, imageWithScoreZero, onFavouriteToggleMock, onVoteDownMock, onVoteUpMock } from "./image-gallery-test-helper";
import React from "react";
import Gallery from "./gallery";

describe('gallery', () => {

    it('should render a warning message when no images are passed in', () => {
        const component = <Gallery
            items={[]}
            onToggleFavourite={onFavouriteToggleMock}
            onVoteUp={onVoteUpMock}
            onVoteDown={onVoteDownMock}/>

        const {container} = render(component)
        expect(screen.getByTestId('empty_list')).toBeTruthy();
    })

    it('should render n Gallery items when n images are passed in', () => {
        const component = <Gallery
            items={images}
            onToggleFavourite={onFavouriteToggleMock}
            onVoteUp={onVoteUpMock}
            onVoteDown={onVoteDownMock}/>

        const {container} = render(component)
        expect(screen.getAllByRole('listitem')).toHaveLength(4);
    })

})