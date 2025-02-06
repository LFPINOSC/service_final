import Sexo from '../models/Sexo.js';
import apiResponse from '../components/apiResponse.js';

class SexoController{
    async createSexo(req, res){
        try{
            const sexoData=req.body;
            const sexo= await Sexo.create(sexoData);
            const response=new apiResponse(true,sexo,201,'El sexo se creó correctamente');
            res.status(201).json(response);
        }catch(error){
            const response=new apiResponse(false,null,404,'Error al crear el sexo');
            res.status(404).json(response);
        }
    }
    
    async getSexos(req,res){
        try {
            const sexos= await Sexo.findAll();
            const response=new apiResponse(true,sexos,201,'Listado de sexos');
            res.status(201).json(response);
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al recuperar el listado de sexos');
            res.status(404).json(response);
        }
    }
    
    async getBySexo(req,res){
        try {
            const sexoSecuencial=req.params.secuencial;
            const sexo= await Sexo.findByPk(sexoSecuencial);
            if(sexo){
                const response=new apiResponse(true,sexo,201,'Sexo encontrado');
                res.status(201).json(response);  
            }else{
                const response=new apiResponse(true,null,301,'No existe un sexo con ese secuencial registrado');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al tratar de recuperar el sexo');
            res.status(404).json(response);
        }
    }
    
    async updateSexo(req,res){
        try {
            const sexoSecuencial=req.params.secuencial;
            const sexoData=req.body;
            const sexo= await Sexo.findByPk(sexoSecuencial);
            if(sexo){
                await sexo.update(sexoData);
                const response=new apiResponse(true,sexo,201,'Los cambios se han realizado exitosamente');
                res.status(201).json(response);
            }else{
                const response=new apiResponse(true,null,301,'El sexo a modificar no se encontró');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al modificar el sexo');
            res.status(404).json(response);
        }
    }
    
    async deleteSexo(req,res){
        try {
            const sexoSecuencial=req.params.secuencial;
            const sexo= await Sexo.findByPk(sexoSecuencial);
            if(sexo){
                await sexo.destroy();
                const response=new apiResponse(true,sexo,201,'Sexo eliminado');
                res.status(201).json(response);
            }else{
                const response=new apiResponse(true,null,301,'No existe ese sexo a eliminar');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al eliminar el sexo');
            res.status(404).json(response);
        }
    }
};
export default new SexoController;
