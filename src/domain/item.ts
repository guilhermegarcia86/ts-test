import { Column, Entity, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from "typeorm";
import { Exclude } from "class-transformer"
import { IsNotEmpty, IsString } from "class-validator"

@Entity({name: "Item"})
@Tree("closure-table", {
    closureTableName: "item",
    ancestorColumnName: (column) => `parent_${column.propertyName}`,
    descendantColumnName: (column) => `descendant_${column.propertyName}`
})
export class Item {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty({message: "Should not be empty"})
    @IsString({message: "Field must be a string"})
    @Column({length: 60})
    name: string

    @Exclude({
        toPlainOnly: true
    })
    relatedId: number

    @TreeChildren({cascade: true})
    submenus: Item[]

    @Exclude()
    @TreeParent({
        onDelete: "CASCADE"
    })
    parentMenu: Item

}