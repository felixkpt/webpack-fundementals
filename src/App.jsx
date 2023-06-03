import React from 'react';
import { RandomUserHtml } from "./randomuser";

const App = ({ title }) => html(title)

const html = (title) =>
    <div>
        <div className="container">
            <h1>
                {title}
            </h1>
            <RandomUserHtml />
        </div>
    </div>

export default App;