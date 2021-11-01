import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "Item"})
export class ItemEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 60})
    name: string

    @ManyToOne(type => ItemEntity, submenu => submenu.childMenu)
    parentMenu: ItemEntity

    @OneToMany(type => ItemEntity, submenu => submenu.parentMenu)
    childMenu: ItemEntity[]

}