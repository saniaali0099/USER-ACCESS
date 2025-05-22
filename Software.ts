import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Software {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("text")
    description: string;

    @Column("simple-array")
    accessLevels: string[]; // e.g., ["Read", "Write", "Admin"]
}
