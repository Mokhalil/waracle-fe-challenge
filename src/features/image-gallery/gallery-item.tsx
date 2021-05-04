import React from 'react';

interface GalleryItemProps {
    item: any
    onVoteUp: (id: string) => void,
    onVoteDown: (id: string) => void,
    onToggleFavourite: (id: string, subId: string) => void
}

export enum GalleryItemScoreStyle {
    positive = 'ml-4 bg-green-200 font-semibold rounded-full h-6 w-6 flex  items-center justify-center text-green-800 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500',
    negative = 'ml-4 bg-red-200 font-semibold rounded-full h-6 w-6 flex  items-center justify-center text-red-800 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
}

const GalleryItem = ({item, onVoteUp, onVoteDown, onToggleFavourite}: GalleryItemProps) => {

    const score = (item?.score) ? item.score.up - item.score.down : 0;

    if (!item)
        return <div>Gallery item cannot be empty</div>
    return (
        <li className="relative" data-testid={`item_${item.id}`}>
            <div
                className="ring-2 ring-offset-2 ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-200 overflow-hidden">
                <img src={`${item.url}`} alt={''} className="object-cover pointer-events-none"/>

            </div>
            <div className={'mt-2 flex justify-center'}>
                <button type="button"
                        data-testid={'favourite-toggle'}
                        onClick={() => onToggleFavourite(item.id, item.sub_id)}
                        className="ml-4 bg-white rounded-full h-6 w-6 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    {
                        (item.isFavourite) ?
                            <svg className="h-6 w-6 text-red-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg> :
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                    }

                    <span className="sr-only">Favorite</span>
                </button>
                <button type="button"
                        data-testid={'vote-up'}
                        onClick={() => onVoteUp(item.id)}
                        className="ml-4 bg-white rounded-full h-6 w-6 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                    </svg>
                    <span className="sr-only">Vote up</span>
                </button>

                <button type="button"
                        data-testid={'vote-down'}
                        onClick={() => onVoteDown(item.id)}
                        className="ml-4 bg-white rounded-full h-6 w-6 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
                    </svg>
                    <span className="sr-only">Favorite</span>
                </button>
                {
                    (score != 0) ? <div
                        data-testid={(score > 0) ? 'positive_score' : 'negative_score'
                        }
                        className={(score > 0) ? GalleryItemScoreStyle.positive : GalleryItemScoreStyle.negative}>
                        {score}
                    </div> : undefined
                }
            </div>
        </li>
    );
};

export default GalleryItem;