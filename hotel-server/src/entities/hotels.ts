import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from'typeorm';
@Entity()
export class Hotels extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    name!: string;
    @Column()
    image!: string;
    @Column()
    city!: string;
    @Column()
    wifi!: number;
    @Column()
    coffee!: number;
    @Column()
    price!: number;
}