import {NextFunction, Request, Response} from 'express';
import {AppDataSource} from "../connection/DataSource";
import Meeting from "../entity/Meeting";
import { Like, Raw, Repository } from 'typeorm';
import { faker } from '@faker-js/faker';

class Controller {
    constructor() {}

    public async getAllMeetings(req: Request, res: Response, next: NextFunction) {
        try {
            const limit = req.query["limit"] ? Number.parseInt((req.query["limit"] as string)) : 100;
            const meetings = await Controller.MeetingRepository().find({ take: limit, order: { BeginAt: "ASC" } });
            res.json(meetings);
        }
        catch (error) {
            next(error);
        };
    }
    
    public async addMeeting(req: Request, res: Response, next: NextFunction) {
        try {
            let createMeetingDtoRaw = req.body;
            let meeting = new Meeting();
            meeting.Title = createMeetingDtoRaw.Title;
            meeting.Description = createMeetingDtoRaw.Description;
            meeting.BeginAt = new Date(createMeetingDtoRaw.BeginAt);
            meeting.Location = createMeetingDtoRaw.Location;

            await Controller.MeetingRepository().save(meeting);
            res.setHeader('Location', `${req.path}/${meeting.Id}`).status(201).send();
        }
        catch (err) {
            next(err);
        }
    }

    public async getMeeting(req: Request, res: Response, next: NextFunction) {
        try {
            const meeting = await Controller.MeetingRepository().findOneOrFail({ where: { Id: (req as any).meetingId } });
            res.json(meeting);
        }
        catch (err) {
            if ((err as Error).message.startsWith("Could not find any entity of type")) {
                res.status(404).json({message: "Meeting not found."});
            }
            else {
                next(err);
            }
        }
    }

    public async updateMeeting(req: Request, res: Response, next: NextFunction) {
        let updateMeetingDtoRaw = req.body;
        let meeting = new Meeting();
        meeting.Id = (req as any).meetingId;
        meeting.Title = updateMeetingDtoRaw.Title;
        meeting.Description = updateMeetingDtoRaw.Description;
        meeting.BeginAt = new Date(updateMeetingDtoRaw.BeginAt);
        meeting.Location = updateMeetingDtoRaw.Location;

        try {
            await Controller.MeetingRepository().findOneOrFail({ where: { Id: meeting.Id } });

            await  Controller.MeetingRepository().update({ Id: meeting.Id }, meeting);
            res.json({ message: "Successfully Updated." });
        }
        catch (err) {
            if ((err as Error).message.startsWith("Could not find any entity of type")) {
                res.status(404).json({message: "Meeting not found."});
            }
            else {
                next(err);
            }
        }
    }

    public async deleteMeeting(req: Request, res: Response, next: NextFunction) {
        try {
            await Controller.MeetingRepository().delete((req as any).meetingId);
            res.json({message: "Successfully Removed."});
        }
        catch (err) {
            next(err);
        }
    }

    public async searchMeetings(req: Request, res: Response, next: NextFunction) {
        try {
            const title: string = req.query["title"]?.toString() ?? "";
            const beginAt: string = req.query["beginAt"]?.toString() ?? "";

            let titleClause = {} as any;
            let beginAtClause = {} as any;
            if (title) {
                titleClause = { Title: Like(`%${title}%`) };
            }
            if (beginAt) {
                beginAtClause = { BeginAt: Raw((alias) => `${alias} >= :date`, { date: beginAt }) };
            }

            const meetings = await Controller.MeetingRepository().findBy({ 
                ...titleClause,
                ...beginAtClause,
            });

            res.json(meetings);
        }
        catch (err) {
            next(err);
        }
    }

    public async seedMeetings(req: Request, res: Response, next: NextFunction) {
        try {
            const seedCount = req.query["seedCount"] ? Number.parseInt((req.query["seedCount"] as string)) : 1000;
            const meetings = [];
            for (let i = 0; i < seedCount; i++) {
                const meeting = new Meeting();
                meeting.Title = faker.lorem.sentence();
                meeting.Description = faker.lorem.paragraph(1);
                meeting.BeginAt = faker.date.future();
                meeting.Location = faker.location.streetAddress();
                meetings.push(meeting);
            }
            await Controller.MeetingRepository().save(meetings);

            res.json({message: "Successfully Seeded."});
        }
        catch (err) {
            next(err);
        }
    }

    private static MeetingRepository(): Repository<Meeting> {
        return AppDataSource.manager.getRepository(Meeting);
    }
}

export {Controller}