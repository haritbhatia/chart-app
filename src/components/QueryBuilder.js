import React, { useContext, useEffect } from "react";
import API from "../apis/apis";
import '../App.css';
import { context } from '../context/context';
import Utils from '../utils';

export default function QueryBuilder(props) {
    let {
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        resetQueries,
        fromMinDate,
        toMinDate,
        authToken,
        setFromMinDate,
        setToMinDate
    } = useContext(context);
    useEffect(async () => {
        let resp = await API.setDateRange(authToken);
        let result = await resp;
        setFromMinDate(Number(result.result.startDate));
        setToMinDate(Number(result.result.endDate));
    }, []);
    return (
        <React.Fragment>
            <div className="card m-10">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <label >From Date</label>
                                <input type="date" min={Utils.formatDate(new Date(fromMinDate))} max={Utils.formatDate(new Date(toMinDate))} className="form-control" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label >To Date</label>
                                <input type="date" className="form-control" min={Utils.formatDate(new Date(fromMinDate))} max={Utils.formatDate(new Date(toMinDate))} value={toDate} onChange={(e) => setToDate(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-3" style={{ marginTop: "20px" }}>
                            <button type="button" onClick={props.getData} className="btn btn-primary mr-2">Apply</button>
                            <button type="button" onClick={resetQueries} className="btn btn-secondary">Reset</button>
                        </div>
                        <div className="col-md-3" />
                        {
                            props.dateError &&
                            <div className="col-md-6">
                                <span className="badge badge-pill badge-danger">From Date &gt; To Date</span>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
    // }

}