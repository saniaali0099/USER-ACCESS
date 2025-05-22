import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Software } from "./Software";

@Entity()
export class Request {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Software)
    software: Software;

    @Column()
    accessType: 'Read' | 'Write' | 'Admin';

    @Column('text')
    reason: string;

    @Column()
    status: 'Pending' | 'Approved' | 'Rejected';
}
