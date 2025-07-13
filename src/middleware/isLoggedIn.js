// Importing jsonwebtoken for token handling (not directly used here, but may be used elsewhere)
import jwt from "jsonwebtoken";

// Importing custom token verification helper
import { verifyToken } from "../helpers/token.js";

// Middleware function to check if the user is logged in
const isLoggedIn = (req, res, next) => {
    try {
        // Step 1: Retrieve authToken from cookies
        const token = req.cookies.authToken;

        // Step 2: If token is not found, throw an error to block access
        if (!token) {
            throw new Error("User Not Authenticated");
        }

        // Step 3: Verify the token using custom helper function
        const decoded = verifyToken(token);

        // Step 4: Log decoded token details (for debugging)
        console.log(decoded);

        // Step 5: Attach decoded user info to request for access in later middleware/routes
        req.user = decoded;

        // Step 6: Move to the next middleware or route handler
        next();
    } catch (error) {
        // Step 7: If token is missing or invalid, send error message to client
        res.send(error.message); // ⚠ Not recommended — better to send proper status code
    }
};

// Export the middleware to be used in protected routes
export { isLoggedIn };