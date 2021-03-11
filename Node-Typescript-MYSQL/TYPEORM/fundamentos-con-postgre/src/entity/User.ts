import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


// Entity recibe un string para poder darle un nombre de la tabla , ej -> @Entity('tbl_users')
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    isStudent: boolean;

    // Dentro de los decoradores pueden ir parametros por ejemplo, PhoneNumber debe ser varchas y max de 60 caracteres y que en este caso pueda ser nullo
    // Ojo cuidado como redefini la estructura borro los datos
    @Column({ type: 'varchar' , length: 60 , nullable: true })
    phoneNumber: string;

    @Column({ nullable: false , default: ''})
    carrer: string;

    @Column({ nullable:true})
    average: number;
}
