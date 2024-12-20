const express = require("express");
const router = express.Router();
const paquetesModel = require("../../models/paquetesModel");
const util = require("util");
const cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get("/", async function (req, res, next) {
  let paquetes = await paquetesModel.getPaquetes();

  paquetes = paquetes.map((paquete) => {
    if (paquete.img_id) {
      const imagen = cloudinary.image(paquete.img_id, {
        width: 60,
        height: 60,
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
      req.body.nombre != "" &&
      req.body.destino != "" &&
      req.body.regimen != "" &&
      req.body.noches != "" &&
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

  let paquete = await paquetesModel.getPaqueteById(id);
  if (paquete.img_id) {
    await destroy(paquete.img_id);
  }

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
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await destroy(req.body.img_original);
    }

    const obj = {
      nombre: req.body.nombre,
      destino: req.body.destino,
      regimen: req.body.regimen,
      noches: req.body.noches,
      hotel: req.body.hotel,
      paquete: req.body.paquete,
      img_id,
    };
    console.log(obj);

    await paquetesModel.editarPaqueteById(obj, req.body.id);
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
