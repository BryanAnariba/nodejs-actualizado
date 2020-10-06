import { Entity , PrimaryGeneratedColumn , Column, OneToMany } from 'typeorm';
import { User } from './User';

@Entity()
export class Gender {
    @PrimaryGeneratedColumn()
    id: number;

    // Relaciona Gender con User
    @OneToMany((type) => User, user => user.gender)
    user: User[];

    @Column({ type: 'varchar' , length: 45 })
    gender: string;

    @Column({ type: 'varchar' , length: 1})
    abrev: string;
}