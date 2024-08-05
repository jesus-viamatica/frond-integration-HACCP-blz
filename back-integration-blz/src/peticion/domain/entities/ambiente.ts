import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";

import { CuerpoPeticion } from "./cuerpo";

@Entity("peticion_ambiente")
export class AmbientePeticion extends BaseEntity {
  @PrimaryGeneratedColumn()
  ambienteid: number;

  @Column( { nullable: false })
  nombre_ambiente: string;


  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
  createdAt: Date;

  @Column({ type: "timestamp", nullable: true })
  updateAt: Date;

  @OneToMany(() => CuerpoPeticion, cuerpo => cuerpo.ambiente)
    cuerpo: CuerpoPeticion;
}