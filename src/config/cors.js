require("dotenv").config();

// const configCors = (app) => {
//   // Add headers before the routes are defined
//   app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//     );

//     // Request headers you wish to allow
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "X-Requested-With,content-type, Authorization"
//     );

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader("Access-Control-Allow-Credentials", true);

//     if (req.method === "OPTIONS") {
//       return res.sendStatus(200);
//     }
//     // Pass to next layer of middleware
//     next();
//   });
// };

// export default configCors;

import cors from 'cors';

const configCors = (app) => {
  const corsOptions = {
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
  };

  app.use(cors(corsOptions));
};

export default configCors;
