const adminAuth = (req, res, next) => {
    console.log("admin auth is getting checked")
    const token = "xyz";
    const isAdminAuth = token === "xyz";
    if (!isAdminAuth) {
        res.status(401).send("unauthorized access, request denied")
    }
    else {
        next();
    }
}

const userAuth = (req, res, next) => {
    console.log("user auth is getting checked")
    const token = "xyza";
    const isAdminAuth = token === "xyz";
    if (!isAdminAuth) {
        res.status(401).send("unauthorized access, request denied")
    }
    else {
        next();
    }
}


module.exports = {
    adminAuth, userAuth,
}