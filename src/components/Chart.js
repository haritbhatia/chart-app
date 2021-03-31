import React, { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

const Chart = (props) => {

    let [showToast, setShowToast] = useState(false)
    let [yAxisData, updateYAxisData] = useState([])
    let [xAxisData, updateXAxisData] = useState([])
    let [randomColors, setRandomColors] = useState([]);
    let [labelsData, setLabelsData] = useState([]);
    let [percentData, setPercentData] = useState([]);

    let generateColorCodes = () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ", 0.5)";
    };

    useEffect(() => {
        if (props.data && props.data.length && props.chartType === "table") {

            let xAxisData = [];
            let yAxisData = [];
            props.data.forEach(item => {
                yAxisData.push(Number(item.impressions_offered));
                xAxisData.push(item.publisherId);
                randomColors.push(generateColorCodes())
            })
            setShowToast(false);
            updateYAxisData(yAxisData);
            updateXAxisData(xAxisData);
            setRandomColors(randomColors);
        }
        else if (props.data && props.data.length && props.chartType === "table_second") {

            let xAxisData = [];
            let yAxisData = [];
            props.data.forEach(item => {
                yAxisData.push(Number(item.impressions_offered));
                xAxisData.push(item.appSiteId);
                randomColors.push(generateColorCodes())
            })
            setShowToast(false);
            updateYAxisData(yAxisData);
            updateXAxisData(xAxisData);
            setRandomColors(randomColors);
        }
        else if (props.data && props.data.length && props.chartType === "pie") {
            let labelsData = [];
            let percentData = [];
            props.data.forEach(item => {
                percentData.push(Number(item.CM001_percent));
                labelsData.push(item.advertiserId);
                randomColors.push(generateColorCodes())
            })
            setShowToast(false);
            setPercentData(percentData);
            setLabelsData(labelsData);
            setRandomColors(randomColors);
        }
        else {
            setShowToast(true);
        }
    }, [setRandomColors, props, randomColors])
    return (
        <React.Fragment>
            {
                showToast &&
                <div className="alert alert-secondary" role="alert">
                    No Details found for this query
            </div>
            }
            {
                !showToast && props.chartType === "table" && 
                <div className="chart-container">First Chart
                    <Bar
                        data={{
                            labels: xAxisData,
                            datasets: [{
                                label: 'First Chart',
                                data: yAxisData,
                                backgroundColor: randomColors,
                            }]
                        }
                        }
                        //width={50}
                        //height={50}
                        options={{
                            //maintainAspectRatio: false,
                            aspectRatio: 1,
                        }}
                    />
                </div>
            }
            {
                !showToast && props.chartType === "table_second" && 
                <div className="chart-container">Second Chart
                    <Bar
                        data={{
                            labels: xAxisData,
                            datasets: [{
                                label: 'Second Chart',
                                data: yAxisData,
                                backgroundColor: randomColors,
                            }]
                        }
                        }
                        //width={50}
                        //height={50}
                        options={{
                            //maintainAspectRatio: false,
                            aspectRatio: 1,
                        }}
                    />
                </div>
            }
            {
                props.chartType === "pie" && !showToast &&
                <div className="chart-container">Third Chart
                    <Doughnut
                        data={{
                            labels: labelsData,
                            datasets: [{
                                data: percentData,
                                backgroundColor: randomColors,
                            }]
                        }
                        }
                        //width={50}
                        //height={50}
                        options={{
                            //maintainAspectRatio: false,
                            aspectRatio: 1,
                        }}
                    />
                </div>
            }
        </React.Fragment>
    )
}

export default Chart;