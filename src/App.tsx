import React, { useState } from "react";
import "./App.css";
import { DownloadButton } from "./components/DownloadButton";
import { INITIAL_DATA } from "./data/neighborhoods";
import { Neighborhood } from "./interfaces/neighborhood";

function App(): JSX.Element {
    const [neighborhoods] = useState<Neighborhood[]>(INITIAL_DATA);
    return (
        <div className="App">
            <DownloadButton neighborhoods={neighborhoods}/>
        </div>
    );
}

export default App;
