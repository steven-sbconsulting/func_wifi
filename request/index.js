const axios = require("axios");

module.exports = async function (context, req) {
    context.log("Request received");

    let email = req.body?.email || req.query.email;
    let mac = req.body?.mac || req.query.mac;

    if (!email || !mac) {
        context.res = {
            status: 400,
            body: `Missing data: email=${email}, mac=${mac}`
        };
        return;
    }

    try {
        await axios.post(process.env.FLOW_URL, {
            email,
            mac
        });

        context.res = {
            status: 200,
            body: "Request submitted ✅"
        };
    } catch (error) {
        context.log("Flow error:", error.message);

        context.res = {
            status: 500,
            body: "Failed to contact approval flow"
        };
    }
};
