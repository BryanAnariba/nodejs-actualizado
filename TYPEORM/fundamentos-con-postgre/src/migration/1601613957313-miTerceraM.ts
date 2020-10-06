import {MigrationInterface, QueryRunner} from "typeorm";

export class miTerceraM1601613957313 implements MigrationInterface {
    name = 'miTerceraM1601613957313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "carrer" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "carrer"`);
    }

}
