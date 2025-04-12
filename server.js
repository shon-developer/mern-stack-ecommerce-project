import app from "./src/app.js";
import colors from "colors";

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App is running, successfully at PORT: ${PORT}`.rainbow);
});
