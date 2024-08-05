import { TipoPeticion } from "../entities/tipo-peticion";


export class TipoPeticionService {
    constructor() {}
    async findOrCreate(tipo: string, url:string) {
        const tipoExistente = await TipoPeticion.findOne({
            where: { nombre_tipo: tipo },
        });
    
        if (!tipoExistente) {
            const tipoNuevo = await TipoPeticion.create({
                nombre_tipo: tipo,
                url: url
            }).save();
            return tipoNuevo;
        }
        return tipoExistente;
    }

    async getById(id: number) {
        return await TipoPeticion.findOne({
            where: { tipoid: id },
        });
    }

}


