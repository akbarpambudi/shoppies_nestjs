import { AuditedEntity } from 'src/common';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
export class Catalog extends AuditedEntity {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  image: string;
  @Column()
  sellerId: string;
  @Column()
  inStock: number;
}
