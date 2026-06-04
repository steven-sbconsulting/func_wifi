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

    const client = axios.create({
        baseURL: process.env.UNIFI_URL,
        withCredentials: true
    });

    await client.post("/api/login", {
        username: process.env.UNIFI_USER,
        password: process.env.UNIFI_PASS
    });

    await client.post("/proxy/network/api/s/default/cmd/stamgr", {
        cmd: "authorize-guest",
        mac: mac,
        minutes: 480
    });

    context.res = {
        status: 200,
        body: "User approved ✅"
    };
};
