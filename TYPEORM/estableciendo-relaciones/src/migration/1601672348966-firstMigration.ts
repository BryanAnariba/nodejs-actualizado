import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1601672348966 implements MigrationInterface {
    name = 'firstMigration1601672348966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "detail" ("id" SERIAL NOT NULL, "detail" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_28de27ee9ae6103af88ab1b3c0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "gender" ("id" SERIAL NOT NULL, "gender" character varying(45) NOT NULL, "abrev" character varying(1) NOT NULL, CONSTRAINT "PK_98a711129bc073e6312d08364e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, "emailUser" character varying NOT NULL, "detail_id" integer, CONSTRAINT "UQ_77d3c8feef4de2761238caeff9e" UNIQUE ("emailUser"), CONSTRAINT "REL_673613c95633d9058a44041794" UNIQUE ("detail_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_673613c95633d9058a44041794d" FOREIGN KEY ("detail_id") REFERENCES "detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_673613c95633d9058a44041794d"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "gender"`);
        await queryRunner.query(`DROP TABLE "detail"`);
    }

}
