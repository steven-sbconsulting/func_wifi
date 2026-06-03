const axios = require("axios");

module.exports = async function (context, req) {
    context.log("Request received");

    let email = req.body?.email || req.query.email;
    let mac = req.body?.mac || req.query.mac;

    if (!email || !mac) {
        context.res = {
            status: 400,
            body: "Missing email or MAC"
        };
        return;
    }

    await axios.post(process.env.FLOW_URL, {
        email: email,
        mac: mac
    });

    context.res = {
        status: 200,
        body: "Request submitted. Waiting for approval..."
    };
};
