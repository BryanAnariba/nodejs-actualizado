import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { Detail } from './Details';
import { Gender } from "./Gender";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne((type) => Detail , {
        eager: true ,//para hacer el join con la respectiva tabla
        cascade: true // Para 
    })
    @JoinColumn({ name: 'detail_id' })
    details: Detail;

    // Relaciona User con Genders
    @OneToMany((type) => Gender , (gender) => gender.user)
    gender: Gender;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column({ type: 'varchar' , unique: true })
    emailUser: string;
}
