import { Entity , PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity()
export class Detail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    detail: string;

    @Column()
    address: string;
}