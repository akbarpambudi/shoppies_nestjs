import {MigrationInterface, QueryRunner} from "typeorm";

export class catalogModuleInitial1580053549825 implements MigrationInterface {
    name = 'catalogModuleInitial1580053549825'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "catalog" ("createdDate" TIMESTAMP, "modifyDate" TIMESTAMP, "id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, "sellerId" character varying NOT NULL, "inStock" integer NOT NULL, CONSTRAINT "PK_782754bded12b4e75ad4afff913" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "catalog"`, undefined);
    }

}
