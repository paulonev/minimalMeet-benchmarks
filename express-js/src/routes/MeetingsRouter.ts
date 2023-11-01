import {Application, NextFunction, Request, Response, response} from "express";
import {Controller} from "../controller/Controller";

class MeetingsRouter {
    private controller: Controller;

    constructor() {
        this.controller = new Controller();
    }

    public routes(app: Application): void {
        app.route('/meetings')
            .get(this.controller.getAllMeetings)
            .post(this.controller.addMeeting);

        app.param('id', (req: Request, res: Response, next: Function, id: string) => {
            if (id !== undefined) {
                (req as any).meetingId = id;
                next();
            } else {
                res.status(400).json({message: "id is missing"});
            }
        });
        app.route('/meetings/:id')
            .get(this.controller.getMeeting)
            .put(this.controller.updateMeeting)
            .delete(this.controller.deleteMeeting);

        app.route('/search')
            .get(this.controller.searchMeetings);

        app.route('/seed')
            .post(this.controller.seedMeetings)
    }
}
export {MeetingsRouter};
