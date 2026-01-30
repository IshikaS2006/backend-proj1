// Use getters to read env vars when accessed, not when module loads
export default {
    get JWT_SECRET() {
        return process.env.JWT_SECRET;
    },
    get MONGO_URI() {
        return process.env.MONGO_URI;
    },
    get PORT() {
        return process.env.PORT;
    }
}