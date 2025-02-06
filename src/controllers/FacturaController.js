import Factura from "../models/Factura.js";
import apiResponse from "../components/apiResponse.js";
import sequelize from "../config/sequelizeConfig.js";

class FacturaController {
  async createFactura(req, res) {
    try {
      const facturaData = req.body;
      const factura = await Factura.create(facturaData);
      const response = new apiResponse(true, factura, 200, "Factura creada exitosamente");
      res.status(200).json(response);
    } catch (error) {
      const response = new apiResponse(false, null, 500, error.message);
      res.status(500).json(response);
    }
  }

  async getFactura(req, res) {
    try {
      const facturaId = req.params.id;
      const factura = await Factura.findByPk(facturaId);
      
      if (factura) {
        const response = new apiResponse(true, factura, 200, "Factura encontrada");
        res.json(response);
      } else {
        const response = new apiResponse(false, null, 404, "Factura no encontrada");
        res.status(404).json(response);
      }
    } catch (error) {
      const response = new apiResponse(false, null, 500, "Error del servidor");
      res.status(500).json(response);
    }
  }

  async getAllFacturas(req, res) {
    try {
      const facturas = await Factura.findAll({
        where: {
          estaActivo: 1
        }
      });
      const response = new apiResponse(true, facturas, 200, "Facturas obtenidas");
      res.status(200).json(response);
    } catch (error) {
      const response = new apiResponse(false, null, 500, "Error al obtener facturas");
      res.status(500).json(response);
    }
  }
}

export default new FacturaController();