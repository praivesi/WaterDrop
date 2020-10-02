import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import api from '../api'

import styled from 'styled-components'
import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class MindstatsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            mindstats: [],
            columns: [],
            isLoading: false
        }
    }

    componentDidMount = async() => {
        this.setState({isLoading: true})

        console.log("Before getMindstats")

        await api.getMindstats().then(mindstats => {
            this.setState({
                mindstats: mindstats.data.data,
                isLoading: false
            })

            console.log("ENd getMindStats")
        })
    }

    render(){
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
        if(!mindstats.length){
            showChart = false
        }

        return (
            <Wrapper>
                {showChart && (
                    <LineChart width={500} height={300} data={mindstats}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="country" stroke="#8884d8" />
                        <Line type="monotone" dataKey="lifeSatisfication" stroke="#82ca9d" />
                    </LineChart>
                )}
            </Wrapper>
        )
    }
}

export default MindstatsList
        