import React, { useState } from 'react';
import { Greet } from "../wailsjs/go/main/App";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/page";
import AccountPage from "./pages/account/page";

function App() {
    const [resultText, setResultText] = useState("Please, click the button");
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet("wails победа").then(updateResultText);
    }

    return (
        <HashRouter basename={"/"}>
            <div id="App" className="text-white flex h-[calc(100vh-32px)]">
                <Sidebar/>
                <div
                    className="border-t-[1px] border-l-[1px] border-[#303030] bg-black rounded-tl-md overflow-auto w-full [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:my-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#eb6f92]">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/account" element={<AccountPage/>}/>
                    </Routes>
                    <div id="result" className="result text-rose-900">
                        {resultText}
                    </div>
                    <button className="bg-amber-900 text-white" onClick={greet}>
                        Greet
                    </button>
                    {
                        Array.from({length: 100}).map((_, index) => {
                            return (
                                <div key={index}>
                                    lorem ipsum
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
