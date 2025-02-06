import EstadoCivil from '../models/EstadoCivil.js';
import apiResponse from '../components/apiResponse.js';

class EstadoCivilController{
    async createEstadoCivil(req, res){
        try{
            const estadoCivilData=req.body;
            const estadoCivil= await EstadoCivil.create(estadoCivilData);
            const response=new apiResponse(true,estadoCivil,201,'El estado civil se creó correctamente');
            res.status(201).json(response);
        }catch(error){
            const response=new apiResponse(false,null,404,'Error al crear el estado civil');
            res.status(404).json(response);
        }
    }
    
    async getEstadosCiviles(req,res){
        try {
            const estadosCiviles= await EstadoCivil.findAll();
            const response=new apiResponse(true,estadosCiviles,201,'Listado de estados civiles');
            res.status(201).json(response);
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al recuperar el listado de estados civiles');
            res.status(404).json(response);
        }
    }
    
    async getByEstadoCivil(req,res){
        try {
            const estadoCivilSecuencial=req.params.secuencial;
            const estadoCivil= await EstadoCivil.findByPk(estadoCivilSecuencial);
            if(estadoCivil){
                const response=new apiResponse(true,estadoCivil,201,'Estado civil encontrado');
                res.status(201).json(response);  
            }else{
                const response=new apiResponse(true,null,301,'No existe un estado civil con ese secuencial registrado');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al tratar de recuperar el estado civil');
            res.status(404).json(response);
        }
    }
    
    async updateEstadoCivil(req,res){
        try {
            const estadoCivilSecuencial=req.params.secuencial;
            const estadoCivilData=req.body;
            const estadoCivil= await EstadoCivil.findByPk(estadoCivilSecuencial);
            if(estadoCivil){
                await estadoCivil.update(estadoCivilData);
                const response=new apiResponse(true,estadoCivil,201,'Los cambios se han realizado exitosamente');
                res.status(201).json(response);
            }else{
                const response=new apiResponse(true,null,301,'El estado civil a modificar no se encontró');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al modificar el estado civil');
            res.status(404).json(response);
        }
    }
    
    async deleteEstadoCivil(req,res){
        try {
            const estadoCivilSecuencial=req.params.secuencial;
            const estadoCivil= await EstadoCivil.findByPk(estadoCivilSecuencial);
            if(estadoCivil){
                await estadoCivil.destroy();
                const response=new apiResponse(true,estadoCivil,201,'Estado civil eliminado');
                res.status(201).json(response);
            }else{
                const response=new apiResponse(true,null,301,'No existe ese estado civil a eliminar');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al eliminar el estado civil');
            res.status(404).json(response);
        }
    }
};
export default new EstadoCivilController;
