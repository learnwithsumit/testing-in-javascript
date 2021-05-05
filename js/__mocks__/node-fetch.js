const fetch = (url, postObject) => {
    console.log("node-fetch mock used");
    return {
        json: () => {
            const body = JSON.parse(postObject.body);
            return body;
        }
    }
}

module.exports = fetch;