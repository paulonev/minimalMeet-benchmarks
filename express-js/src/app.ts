import express, { Application, Request, Response, NextFunction } from 'express'
import {MeetingsRouter} from './routes/MeetingsRouter';

import bodyParser = require("body-parser");

var errorHandler = require('errorhandler')

class App {
  public app: Application;
  public routePrv: MeetingsRouter;
  
  constructor() {
    // initializing express in this application
    this.app = express();

    // all environments
    this.app.set('port', process.env.PORT || 3000)
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))

    // development only
    if (this.app.get('env') === 'development') {
      this.app.use(errorHandler())
    }

    // for routing the http request to controller
    this.routePrv = new MeetingsRouter();
    this.routePrv.routes(this.app);

    this.app.use('*', (err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err);
      res.status(500).send({ error: "Internal Server Error"});
    })
  }
}

export default new App().app;
