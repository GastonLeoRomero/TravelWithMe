var express = require("express");
var router = express.Router();
var paquetesModel = require("./../models/paquetesModel");
var cloudinary = require("cloudinary").v2;
var nodemailer = require("nodemailer");

router.get("/paquetes", async function (req, res, next) {
  let paquetes = await paquetesModel.getPaquetes();

  paquetes = paquetes.map((paquetes) => {
    if (paquetes.img_id) {
      const imagen = cloudinary.url(paquetes.img_id, {
        width: 960,
        height: 200,
        crop: "fill",
      });
      return {
        ...paquetes,
        imagen,
      };
    } else {
      return {
        ...paquetes,
        imagen: "",
      };
    }
  });

  res.json(paquetes);
});

router.post("/contacto", async (req, res) => {
  const mail = {
    to: "gaston.leo285@gmail.com",
    subject: "Contacto web",
    html: `${req.body.nombre} se contacto a traves de la web y quiere más información a este correo ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br>Su tel es: ${req.body.telefono}`,
  };

  // Looking to send emails in production? Check out our Email API/SMTP product!
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "16cb5297dc2b99",
      pass: "711c42a9e19d92",
    },
  });

  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    messagge: "Mensaje enviado de manera exitosa!",
  });
});

module.exports = router;
