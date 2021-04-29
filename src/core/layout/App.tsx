import React from 'react';
import ImageUploadForm from "../../features/upload-image/image-upload-form";
import Shell from './shell';
import "tailwindcss/tailwind.css"
import GalleryContainer from "../../features/image-gallery/gallery-container";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/upload">
                    <Shell><ImageUploadForm/></Shell>
                </Route>
                <Route path="/">
                    <Shell><GalleryContainer/></Shell>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

