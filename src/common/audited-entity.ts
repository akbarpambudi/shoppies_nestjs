import { Entity, BeforeInsert, Column, BeforeUpdate } from 'typeorm';

@Entity()
export abstract class AuditedEntity {
  @Column({ nullable: true })
  createdDate: Date;
  @Column({ nullable: true })
  modifyDate: Date;

  @BeforeInsert()
  updateCreatedDate() {
    this.createdDate = new Date();
  }

  @BeforeUpdate()
  updateModifyDate() {
    this.modifyDate = new Date();
  }
}
