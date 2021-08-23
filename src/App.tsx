import React from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import SearchBox from './Containers/SearchBox'
import ResultTable from './Containers/ResultTable'

function App(): JSX.Element {
    return (
        <>
            <div className="container">
                <SearchBox />
                <ResultTable />
            </div>
        </>
    )
}

export default App
