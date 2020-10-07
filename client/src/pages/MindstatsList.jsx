import React, { Component, useState } from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import api from '../api'

import styled from 'styled-components'
import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`


class MindstatsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mindstats: [],
            columns: [],
            isLoading: false
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        console.log("Before getMindstats")

        await api.getMindstats().then(mindstats => {
            this.setState({
                mindstats: mindstats.data.data,
                isLoading: false
            })

            console.log("ENd getMindStats")
        })
    }

    render() {
        const { mindstats, isLoading } = this.state
        console.log('TCL: MindStatsList -> render -> mindstats', mindstats)

        console.log(mindstats)

        const columns = [
            {
                Header: 'COUNTRY',
                accessor: 'country',
                filterable: true
            },
            {
                Header: 'LIFE SATISFICATION',
                accessor: 'lifeSatisfication',
                filterable: true
            }
        ]

        let showChart = true
        if (!mindstats.length) {
            showChart = false
        }

        console.log('showChart: ' + showChart)
        /*
        const [viewport, setViewport] = useState({
            latitude: 37,
            longitude: 127,
            width: '100vw',
            height: '100vh',
            zoom: 12
        })
        */

        return (
            <Wrapper>
                {showChart && (
                    <LineChart width={5000} height={300} interval={0} data={mindstats}>
                        <XAxis dataKey="country" />
                        <YAxis />
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="lifeSatisfication" stroke="#8884d8" />
                    </LineChart>
                    /*
                    //<ReactMapGL {...viewport}>
                    <ReactMapGL
                        width={'80vw'}
                        height={'80vh'}
                        mapStyle='mapbox://styles/mapbox/light-v9'
                        //mapboxApiAccessToken='hide token for privacy'
                        latitude={37}
                        longitude={127}
                        zoom={1}
                    />
                    */
                )}
            </Wrapper>
        )
    }
}

export default MindstatsList
