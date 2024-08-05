import { AmbientePeticion } from "../entities/ambiente";
import { get } from 'http';


export class AmbienteService {
    constructor() {}
    async findOrCreate(ambiente: string) {
        const ambienteExistente = await AmbientePeticion.findOne({
            where: { nombre_ambiente: ambiente },
        });
    
        if (!ambienteExistente) {
            const ambienteNuevo = await AmbientePeticion.create({
                nombre_ambiente: ambiente
            }).save();
            return ambienteNuevo;
        }
        return ambienteExistente;
    }

    async getById(id: number) {
        return await AmbientePeticion.findOne({
            where: { ambienteid: id },
        });
    }
    
}
