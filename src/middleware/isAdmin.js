// Middleware function to check if the logged-in user is an admin
const isAdmin = (req, res, next) => {

    try {


        // req.user is assumed to be set earlier by authentication middleware like isLoggedIn
        const user = req.user;

        // Check if the user's role is ADMIN
        if (user && user.role === 'ADMIN') {
            // If user is admin, proceed to the next middleware/route handler
            return next();
        }

        // If user is not an admin, deny access
        return res.status(403).json({ message: "Access denied. Admins only." });

    } catch (error) {
        res.status(403).json({
            message: "Access Denied",
            error: error.message
        })
    }
}

// Exporting the isAdmin middleware to be used in route protection
export { isAdmin };