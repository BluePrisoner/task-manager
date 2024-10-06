const notFound = (req,res) => {
    res.status(404).send("Route doesnot exist")
}

module.exports = notFound;