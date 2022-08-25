import app from "./app"

app.listen (app.get("port"))
console.log("Server on port 3002", app.get("port"))