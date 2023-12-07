import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  projectName: string;

  @Column({ type: 'varchar', length: 300 })
  projectDescription: string;

  @Column({ type: 'varchar', length: 100 })
  projectLink: string;

  @Column({ type: 'int' })
  projectPosition: number;

  @Column({ type: 'varchar', length: 300 })
  projectImageLink: string;
}
