import Persona from '../models/Persona.js';
import apiResponse from '../components/apiResponse.js';

class PersonaController{
    async createPersona(req, res){
        try{
            const personaData=req.body;
            const persona= await Persona.create(personaData);
            const response=new apiResponse(true,persona,201,'La persona se creo correctamente');
            res.status(201).json(response);
        }catch(error){
            const response=new apiResponse(false,null,404,'Error al crear la persona');
            res.status(404).json(response);
        }
    }
    
    async getPersonas(req,res){
        try {
            const personas= await Persona.findAll();
            const response=new apiResponse(true,personas,201,'Listado de personas');
            res.status(201).json(response);
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al recuperar el listado de personas');
            res.status(404).json(response);
        }
    }
    
    async getByPersona(req,res){
        try {
            const personaCedula=req.params.cedula;
            const persona= await Persona.findByPk(personaCedula);
            if(persona){
                const response=new apiResponse(true,persona,201,'Persona Encontrada');
                res.status(201).json(response);  
            }else{
                const response=new apiResponse(true,null,301,'No existe esa cedula de la persona registrada');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al tratar de recuperar persona');
            res.status(404).json(response);
        }
    }
    
    async updatePersona(req,res){
        try {
            const personaCedula=req.params.cedula;
            const personaData=req.body;
            const persona= await Persona.findByPk(personaCedula);
            if(persona){
                await persona.update(personaData);
                const response=new apiResponse(true,persona,201,'Los cambios se han realizado exitosamente');
                res.status(201).json(response);
            }else{
                const response=new apiResponse(true,null,301,'La persona a modificar no se encontro');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al modificar la persona');
            res.status(404).json(response);
        }
    }
    
    async deletePersona(req,res){
        try {
            const personaCedula=req.params.cedula;
            const persona= await Persona.findByPk(personaCedula);
            if(persona){
                await persona.destroy();
                const response=new apiResponse(true,persona,201,'Persona Eliminada');
                res.status(201).json(response);
            }else{
                const response=new apiResponse(true,null,301,'No existe esa persona a eliminar');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al eliminar la persona');
            res.status(404).json(response);
        }
    }
};
export default new PersonaController;
