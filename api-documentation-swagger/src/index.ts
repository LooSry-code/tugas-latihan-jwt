import express from "express";
import db from "./utils/database";
import routes from "./routes/api";
import bodyParser from "body-parser";
//import docs from './docs/route';
import orderRoutes from './routes/order.routes';

const app = express();
const PORT = 3000;

async function init() {
  try {
    await db();

    //const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //app.use("/api", orderRoutes);

    app.use("/api", routes);
// app.use("/api", routesApi);

    //app.use("/api", routesApi);
  //docs(app);

    // http://localhost:3000/api

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
