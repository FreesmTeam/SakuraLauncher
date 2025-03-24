import React, { useState } from 'react';
import { Greet } from "../wailsjs/go/main/App";
import Sidebar from "./components/UI/Sidebar/Sidebar";

function App() {
    const [resultText, setResultText] = useState("Please, click the button");
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet("wails победа").then(updateResultText);
    }

    return (
        <div id="App" className="text-zinc-900 flex h-[calc(100vh-32px)]">
            <Sidebar />
            <div className="__global-application w-full [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:mb-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#eb6f92]">
                <div id="result" className="result text-rose-900">
                    {resultText}
                </div>
                <button className="bg-amber-900 text-white" onClick={greet}>
                    Greet
                </button>
                {
                    Array.from({ length: 100 }).map((_, index) => {
                        return (
                            <div key={index}>
                                lorem ipsum
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default App;
