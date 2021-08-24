import React from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-next-line
import $ from 'jquery'
// eslint-disable-next-line
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import SearchBox from './Containers/SearchBox'
import ResultTable from './Containers/ResultTable'
import Layout from './Components/Layout'

function App(): JSX.Element {
    return (
        <>
            <Layout header={<SearchBox />} body={<ResultTable />} />
        </>
    )
}

export default App
