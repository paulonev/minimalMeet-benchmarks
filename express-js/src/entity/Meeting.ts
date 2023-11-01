import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'MeetingsExpress' })
export class Meeting {
    @PrimaryGeneratedColumn()
    Id!: number;

    @Column()
    Title!: string;
    
    @Column()
    Description!: string;
    
    @Column({ type: 'timestamptz' })
    BeginAt!: Date;
    
    @Column()
    Location!: string;
}

export default Meeting;