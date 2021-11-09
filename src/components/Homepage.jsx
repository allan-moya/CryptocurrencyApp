import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoAPI';

const { Title } = Typography;

function Homepage() {
    const { data, isFetching } = useGetCryptosQuery()

    console.log(data)

    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row>
                <Col span="12" ><Statistic title="Total Cryptocurrencies" value="3"></Statistic></Col>
                <Col span="12" ><Statistic title="Total Exchanges" value="3"></Statistic></Col>
                <Col span="12" ><Statistic title="Total Market Cap" value="3"></Statistic></Col>
                <Col span="12" ><Statistic title="Total 24hr Volume" value="3"></Statistic></Col>
                <Col span="12" ><Statistic title="Total Markets" value="3"></Statistic></Col>


            </Row>

        </>
    )
}

export default Homepage
