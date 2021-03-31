import QueryBuilder from './QueryBuilder';
import Chart from './Chart';
import API from '../apis/apis';
import React, { useContext, useState } from 'react';
import { context } from '../context/context';

const ChartApp = () => {

    let { fromDate, toDate, authToken } = useContext(context);
    const [dataFirstChart, setDataFirstChart] = useState({});
    const [dataSecondChart, setDataSecondChart] = useState({});
    const [dataThirdChart, setDataThirdChart] = useState({});
    const [dateError, setDateError] = useState(false);

    const getData = async () => {
        if (new Date(fromDate).getTime() <= new Date(toDate).getTime()) {
            const stringFirstDate = new Date(fromDate).getTime().toString();
            const stringToDate = new Date(toDate).getTime().toString();
            let resultOne = await API.getFirstChartData(authToken, stringFirstDate, stringToDate);
            setDataFirstChart(resultOne.result.data);
            let resultTwo = await API.getSecondChartData(authToken, stringFirstDate, stringToDate);
            setDataSecondChart(resultTwo.result.data);
            let resultThree = await API.getThirdChartData(authToken, stringFirstDate, stringToDate);
            setDataThirdChart(resultThree.result.data);
            setDateError(false);
        }
        else {
            setDateError(true);
        }
    }

    return (
        <React.Fragment>
            <QueryBuilder dateError={dateError} getData={getData} />
            {
                Object.keys(dataFirstChart).length > 0 &&
                <Chart data={dataFirstChart} chartType="table" />
            }
            {
                Object.keys(dataSecondChart).length > 0 &&
                <Chart data={dataSecondChart} chartType="table_second" />
            }
            {
                Object.keys(dataThirdChart).length > 0 &&
                <Chart data={dataThirdChart} chartType="pie" />
            }
        </React.Fragment >
    );
}

export default ChartApp;