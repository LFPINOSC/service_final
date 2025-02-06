import Examen from '../models/Examen.js';
import apiResponse from '../components/apiResponse.js';

class ExamenController{
    async createExamen(req, res){
        try{
            const examenData=req.body;
            const examen= await Examen.create(examenData);
            const response=new apiResponse(true,examen,201,'El examen se creó correctamente');
            res.status(201).json(response);
        }catch(error){
            const response=new apiResponse(false,null,404,'Error al crear el examen');
            res.status(404).json(response);
        }
    }
    
    async getExamenes(req,res){
        try {
            const examenes= await Examen.findAll();
            const response=new apiResponse(true,examenes,201,'Listado de exámenes');
            res.status(201).json(response);
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al recuperar el listado de exámenes');
            res.status(404).json(response);
        }
    }
    
    async getByExamen(req,res){
        try {
            const examenSecuencial=req.params.secuencial;
            const examen= await Examen.findByPk(examenSecuencial);
            if(examen){
                const response=new apiResponse(true,examen,201,'Examen encontrado');
                res.status(201).json(response);  
            }else{
                const response=new apiResponse(true,null,301,'No existe un examen con ese secuencial registrado');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al tratar de recuperar el examen');
            res.status(404).json(response);
        }
    }
    
    async updateExamen(req,res){
        try {
            const examenSecuencial=req.params.secuencial;
            const examenData=req.body;
            const examen= await Examen.findByPk(examenSecuencial);
            if(examen){
                await examen.update(examenData);
                const response=new apiResponse(true,examen,201,'Los cambios se han realizado exitosamente');
                res.status(201).json(response);
            }else{
                const response=new apiResponse(true,null,301,'El examen a modificar no se encontró');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al modificar el examen');
            res.status(404).json(response);
        }
    }
    
    async deleteExamen(req,res){
        try {
            const examenSecuencial=req.params.secuencial;
            const examen= await Examen.findByPk(examenSecuencial);
            if(examen){
                await examen.destroy();
                const response=new apiResponse(true,examen,201,'Examen eliminado');
                res.status(201).json(response);
            }else{
                const response=new apiResponse(true,null,301,'No existe ese examen a eliminar');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al eliminar el examen');
            res.status(404).json(response);
        }
    }
};
export default new ExamenController;