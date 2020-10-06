import {MigrationInterface, QueryRunner} from "typeorm";

export class miCuartaM1601614847163 implements MigrationInterface {
    name = 'miCuartaM1601614847163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "average" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "average"`);
    }

}
