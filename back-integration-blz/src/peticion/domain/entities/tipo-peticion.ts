

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { CuerpoPeticion } from "./cuerpo";

@Entity("peticion_tipo")
export class TipoPeticion extends BaseEntity {
  @PrimaryGeneratedColumn()
  tipoid: number;

  @Column( { nullable: true })
  nombre_tipo: string;

  @Column( { nullable: false })
  url: string;
  
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
  createdAt: Date;

  @Column({ type: "timestamp", nullable: true })
  updateAt: Date;

  @OneToMany(() => CuerpoPeticion, cuerpo => cuerpo.tipo)
    cuerpo: CuerpoPeticion;
}
