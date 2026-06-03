module.exports = async function (context, req) {
    context.log("Request received");

    context.res = {
        status: 200,
        body: "Function is working ✅"
    };
};
