const express = require("express");
const router = express.Router();
const paquetesModel = require("../../models/paquetesModel");
const util = require("util");
const cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);

router.get("/", async function (req, res, next) {
  let paquetes = await paquetesModel.getPaquetes();

  paquetes = paquetes.map((paquete) => {
    if (paquete.img_id) {
      const imagen = cloudinary.image(paquete.img_id, {
        width: 70,
        height: 70,
        crop: "fill",
      });
      return {
        ...paquete,
        imagen,
      };
    } else {
      return {
        ...paquete,
        imagen: "",
      };
    }
  });

  res.render("admin/paquetes", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    paquetes,
  });
});

router.get("/agregar", (req, res, next) => {
  res.render("admin/agregar", {
    layout: "admin/layout",
  });
});

router.post("/agregar", async (req, res, next) => {
  try {
    let img_id = "";

    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (
      req.body.destino != "" &&
      req.body.hotel != "" &&
      req.body.paquete != ""
    ) {
      await paquetesModel.insertPaquete({
        ...req.body,
        img_id,
      });
      res.redirect("/admin/paquetes");
    } else {
      res.render("admin/agregar", {
        layout: "admin/layout",
        error: true,
        messagge: "Debes completar todos los campos",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("admin/agregar", {
      layout: "admin/layout",
      error: true,
      messagge: "El paquete turístico no ha sido cargado",
    });
  }
});

router.get("/eliminar/:id", async (req, res, next) => {
  const id = req.params.id;
  await paquetesModel.deletePaqueteById(id);
  res.redirect("/admin/paquetes");
});

router.get("/editar/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log(req.params.id);

  const paquete = await paquetesModel.getPaqueteById(id);

  res.render("admin/editar", {
    layout: "admin/layout",
    paquete,
  });
});

router.post("/editar", async (req, res, next) => {
  try {
    const obj = {
      destino: req.body.destino,
      hotel: req.body.hotel,
      paquete: req.body.paquete,
    };
    console.log(obj);

    await paquetesModel.editarNovedadById(obj, req.body.id);
    res.redirect("/admin/paquetes");
  } catch (error) {
    console.log(error);
    res.render("admin/editar", {
      layout: "admin/layout",
      error: true,
      messagge: "No se edito el Paquete Turístico",
    });
  }
});

module.exports = router;
