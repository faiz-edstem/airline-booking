const info = (req, res) => {
    return res.json({
        status: true,
        message: "API is live!",
        errors: {},
        data: {}
    })
};

module.exports = {
    info
}