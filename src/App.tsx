import React from 'react';
import {QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {BrowserRouter} from "react-router-dom";

import {queryClient} from "./react-query/queryClient";
import Photos from "./components/Photos";
import Loading from "./components/Loading";
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Photos/>
                <Loading/>
                <ReactQueryDevtools/>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default App;