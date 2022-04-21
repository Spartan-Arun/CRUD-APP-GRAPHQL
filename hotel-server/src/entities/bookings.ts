import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from'typeorm';
@Entity()
export class Bookings extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    hotelName!: string;
    @Column()
    city!: string;
    @Column()
    checkIn!: string;
    @Column()
    checkOut!: string;
    @Column()
    price!: number;
}