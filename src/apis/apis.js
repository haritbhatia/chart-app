const API = {
    signIn: async () => {
        const data = { "email": "candidate@sigmoid.com", "password": "Sigmoid@123", "rememberMe": true };
        let resp = await fetch("https://sigviewauth.sigmoid.io/signIn", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        resp = await resp.json();
        let result = await resp;
        return result;
    },
    setDateRange: async (authToken) => {
        const data = { "organization": "DemoTest", "view": "Auction" };
        let resp = await fetch("https://sigviewauth.sigmoid.io/api/v1/getDateRange", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': authToken
            },
            body: JSON.stringify(data)
        });
        resp = await resp.json();
        let result = await resp;
        return result;
    },
    getFirstChartData: async (authToken, fromDate, toDate) => {
        const data = { "_id": "dashboard1516252439345", "emailId": "candidate@sigmoid.com", "orgViewReq": { "organization": "DemoTest", "view": "Auction" }, "chartObject": { "metadata": { "title": "chartobject:1516252439345", "img_thumbnail": "../img/chart.png", "chartType": "table", "dataLimit": 50 }, "requestParam": { "granularity": "hour", "timeZone": { "name": "UTC (+00:00)", "location": "UTC" }, "dateRange": { "startDate": fromDate, "endDate": toDate }, "xAxis": ["D044"], "yAxis": ["M002"], "approxCountDistinct": [], "specialCalculation": [], "filter": [], "orderBy": { "metricOrdByList": [{ "id": "M002", "desc": true }] }, "percentCalList": [] } } };
        let resp = await fetch("https://sigviewauth.sigmoid.io/api/v1/getData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': authToken
            },
            body: JSON.stringify(data)
        });
        resp = await resp.json();
        let result = await resp;
        return result;
    },
    getSecondChartData: async (authToken, fromDate, toDate) => {
        const data = { "_id": "dashboard1516252235693", "emailId": "candidate@sigmoid.com", "orgViewReq": { "organization": "DemoTest", "view": "Auction" }, "chartObject": { "metadata": { "title": "chartobject:1516252235693", "img_thumbnail": "../img/chart.png", "chartType": "table", "dataLimit": 50 }, "requestParam": { "granularity": "hour", "timeZone": { "name": "UTC (+00:00)", "location": "UTC" }, "dateRange": { "startDate": fromDate, "endDate": toDate }, "xAxis": ["D017"], "yAxis": ["M002"], "approxCountDistinct": [], "specialCalculation": [], "filter": [], "orderBy": { "metricOrdByList": [{ "id": "M002", "desc": true }] }, "percentCalList": [] } } };
        let resp = await fetch("https://sigviewauth.sigmoid.io/api/v1/getData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': authToken
            },
            body: JSON.stringify(data)
        });
        resp = await resp.json();
        let result = await resp;
        return result;
    },
    getThirdChartData: async (authToken, fromDate, toDate) => {
        const data = { "_id": "Datastory_ChartId_1535224664111", "emailId": "candidate@sigmoid.com", "orgViewReq": { "organization": "DemoTest", "view": "Auction" }, "chartObject": { "metadata": { "title": "", "img_thumbnail": "images/pie.png", "chartType": "pie", "dataLimit": 500 }, "text": [], "requestParam": { "granularity": "hour", "timeZone": { "name": "UTC (+00:00)", "location": "UTC" }, "dateRange": { "startDate": fromDate, "endDate": toDate }, "xAxis": ["D005"], "yAxis": [], "approxCountDistinct": [], "specialCalculation": ["CM001"], "filter": [], "orderBy": { "customMetricOrdByList": [{ "id": "CM001", "desc": true }] }, "percentCalList": [{ "id": "CM001" }] } } };
        let resp = await fetch("https://sigview.sigmoid.io/api/v1/getData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': authToken
            },
            body: JSON.stringify(data)
        });
        resp = await resp.json();
        let result = await resp;
        return result;
    },

}


export default API;