
module.exports = async function (context, req) {
    const { email, mac } = req.body;

    await fetch(process.env.FLOW_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mac })
    });

    context.res = {
        body: "Request submitted. Wait for approval."
    };
};
