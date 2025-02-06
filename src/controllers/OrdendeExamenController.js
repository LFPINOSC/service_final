import OrdendeExamen from '../models/OrdendeExamen.js';
import apiResponse from '../components/apiResponse.js';

class OrdendeExamenController{
    async createOrden(req, res){
        try{
            const ordenData=req.body;
            const orden= await OrdendeExamen.create(ordenData);
            const response=new apiResponse(true,orden,201,'La orden de examen se creó correctamente');
            res.status(201).json(response);
        }catch(error){
            const response=new apiResponse(false,null,404,'Error al crear la orden de examen');
            res.status(404).json(response);
        }
    }
    
    async getOrdenes(req,res){
        try {
            const ordenes= await OrdendeExamen.findAll();
            const response=new apiResponse(true,ordenes,201,'Listado de órdenes de examen');
            res.status(201).json(response);
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al recuperar el listado de órdenes de examen');
            res.status(404).json(response);
        }
    }
    
    async getByOrden(req,res){
        try {
            const ordenSecuencial=req.params.secuencial;
            const orden= await OrdendeExamen.findByPk(ordenSecuencial);
            if(orden){
                const response=new apiResponse(true,orden,201,'Orden de examen encontrada');
                res.status(201).json(response);  
            }else{
                const response=new apiResponse(true,null,301,'No existe una orden de examen con ese secuencial registrado');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al tratar de recuperar la orden de examen');
            res.status(404).json(response);
        }
    }
    
    async updateOrden(req,res){
        try {
            const ordenSecuencial=req.params.secuencial;
            const ordenData=req.body;
            const orden= await OrdendeExamen.findByPk(ordenSecuencial);
            if(orden){
                await orden.update(ordenData);
                const response=new apiResponse(true,orden,201,'Los cambios se han realizado exitosamente');
                res.status(201).json(response);
            }else{
                const response=new apiResponse(true,null,301,'La orden de examen a modificar no se encontró');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al modificar la orden de examen');
            res.status(404).json(response);
        }
    }
    
    async deleteOrden(req,res){
        try {
            const ordenSecuencial=req.params.secuencial;
            const orden= await OrdendeExamen.findByPk(ordenSecuencial);
            if(orden){
                await orden.destroy();
                const response=new apiResponse(true,orden,201,'Orden de examen eliminada');
                res.status(201).json(response);
            }else{
                const response=new apiResponse(true,null,301,'No existe esa orden de examen a eliminar');
                res.status(301).json(response);
            }
        } catch (error) {
            const response=new apiResponse(false,null,404,'Error al eliminar la orden de examen');
            res.status(404).json(response);
        }
    }
};
export default new OrdendeExamenController;