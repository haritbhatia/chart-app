const Utils = {
    formatDate: (date) => {
        let year = date.getFullYear();
        let month = (date.getMonth() + 1 > 9) ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
        let dateValue = (date.getDate() > 9) ? date.getDate() : "0" + date.getDate()
        return year + '-' + month + '-' + dateValue;
    }
}

export default Utils;