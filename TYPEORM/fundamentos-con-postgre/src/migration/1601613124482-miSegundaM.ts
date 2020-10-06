import {MigrationInterface, QueryRunner} from "typeorm";

export class miSegundaM1601613124482 implements MigrationInterface {
    name = 'miSegundaM1601613124482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phoneNumber" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phoneNumber"`);
    }

}
