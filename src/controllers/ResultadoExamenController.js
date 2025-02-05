import ResultadoExamen from '../models/ResultadoExamen.js';
import apiResponse from '../components/apiResponse.js';

class ResultadoExamenController{
    async createResultado(req, res){
        try{
            const resultadoData=req.body;
            const resultado= await ResultadoExamen.create(resultadoData);
            const response=new apiResponse(true,resultado,201,'El resultado de examen se creó correctamente');
            res.status(201).json(response);
        }catch(error){
            const response=new apiResponse(false,null,404,'Error al crear el resultado de examen');
            res.status(404).json(response);
        }
    }
    
    async getResultados(req,res){
        try {
            const resultados= await ResultadoExamen.findAll();
            const response=new apiResponse(true,resultados,201,'Listado de resultados de exámenes');
            res.status(201).json(response);
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al recuperar el listado de resultados de exámenes');
            res.status(404).json(response);
        }
    }
    
    async getByResultado(req,res){
        try {
            const resultadoSecuencial=req.params.secuencial;
            const resultado= await ResultadoExamen.findByPk(resultadoSecuencial);
            if(resultado){
                const response=new apiResponse(true,resultado,201,'Resultado de examen encontrado');
                res.status(201).json(response);  
            }else{
                const response=new apiResponse(true,null,301,'No existe un resultado de examen con ese secuencial registrado');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al tratar de recuperar el resultado de examen');
            res.status(404).json(response);
        }
    }
    
    async updateResultado(req,res){
        try {
            const resultadoSecuencial=req.params.secuencial;
            const resultadoData=req.body;
            const resultado= await ResultadoExamen.findByPk(resultadoSecuencial);
            if(resultado){
                await resultado.update(resultadoData);
                const response=new apiResponse(true,resultado,201,'Los cambios se han realizado exitosamente');
                res.status(201).json(response);
            }else{
                const response=new apiResponse(true,null,301,'El resultado de examen a modificar no se encontró');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al modificar el resultado de examen');
            res.status(404).json(response);
        }
    }
    
    async deleteResultado(req,res){
        try {
            const resultadoSecuencial=req.params.secuencial;
            const resultado= await ResultadoExamen.findByPk(resultadoSecuencial);
            if(resultado){
                await resultado.destroy();
                const response=new apiResponse(true,resultado,201,'Resultado de examen eliminado');
                res.status(201).json(response);
            }else{
                const response=new apiResponse(true,null,301,'No existe ese resultado de examen a eliminar');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al eliminar el resultado de examen');
            res.status(404).json(response);
        }
    }
};
export default new ResultadoExamenController;