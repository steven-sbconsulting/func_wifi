const axios = require("axios");

module.exports = async function (context, req) {
    const mac = req.body?.mac || req.query.mac;

    if (!mac) {
        context.res = {
            status: 400,
            body: "Missing MAC"
        };
        return;
    }

    context.res = {
        status: 200,
        body: "Approve endpoint reached ✅ MAC: " + mac
    };
};
