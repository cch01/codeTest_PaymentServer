import app from "./app";
import router from "./router";

app.use("/", router);
app.listen(3002, console.log("server started at 3002"));
