"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  styled,
  Stack,
  Grid,
  Box,
  Autocomplete,
} from "@mui/material";
import { PDFDocument, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { Roboto } from "next/font/google";
import "../../../css/globals.css";

export default function EditarLicenciaSanitaria() {
  const [generatedPdf, setGeneratedPdf] = useState(null);
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#10754a",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));

  const handleTipoDeServicio = (event, value) => {
    if (value) {
      setTipoDeServicio(value);
    } else {
      setTipoDeServicio("");
    }
  };

  const PlagasControladasArray = [
    "Ratas",
    "Aracnidos",
    "Cucarachas",
    "Palomas",
  ]; //aqui se van a consumir los tipos de empresasa que dejemos
  const TipoDeServicioArray = [
    "Aspercion",
    "Captura De Aves",
    "Cebado con Gel",
    "Cebado con Granulos",
  ];

  //constantes inputs
  const [areasTratadas, setAreasTratadas] = useState("");
  const [poblacion, setPoblacion] = useState("");
  const [tipoDeServicio, setTipoDeServicio] = useState("");

  const [plagasControladas, setPlagasControladas] = useState("");
  const [plagas2Controladas, setPlagas2Controladas] = useState("");
  const [plagas3Controladas, setPlagas3Controladas] = useState("");
  const [plagas4Controladas, setPlagas4Controladas] = useState("");
  const [plagas5Controladas, setPlagas5Controladas] = useState("");

  let [productoSeleccionado, setProductoSeleccionado] = useState("");
  let [producto2Seleccionado, setProducto2Seleccionado] = useState("");
  let [producto3Seleccionado, setProducto3Seleccionado] = useState("");
  let [producto4Seleccionado, setProducto4Seleccionado] = useState("");
  let [producto5Seleccionado, setProducto5Seleccionado] = useState("");

  let opcionesProductos = [
    { value: "RSCO-URB-INAC-102U-303-032-10", label: "AGITA" },
    { value: "Producto 2", label: "Nombre del Producto 2" },
    { value: "Producto 3", label: "Nombre del Producto 3" },
  ];
  let opcionesPlagas = [
    { value: "RSCO-URB-INAC-102U-303-032-10", label: "AGITA" },
    { value: "Producto 2", label: "Nombre del Producto 2" },
    { value: "Producto 3", label: "Nombre del Producto 3" },
  ];

  const handlePlagasChange = (event, value) => {
    if (value) {
      
      setPlagasControladas(value);
    } else {
      setPlagasControladas("");
    }
  };
  const handlePlagas2Change = (event, value) => {
    if (value) {
      
      setPlagas2Controladas(value);
    } else {
      setPlagas2Controladas("");
    }
  };
  const handlePlagas3Change = (event, value) => {
    if (value) {
      
      setPlagas3Controladas(value);
    } else {
      setPlagas3Controladas("");
    }
  };
  const handlePlagas4Change = (event, value) => {
    if (value) {
      
      setPlagas4Controladas(value);
    } else {
      setPlagas4Controladas("");
    }
  };
  const handlePlagas5Change = (event, value) => {
    if (value) {
      
      setPlagas5Controladas(value);
    } else {
      setPlagas5Controladas("");
    }
  };

  const [showInput, setShowInput] = useState(0);
  const [showInput2, setShowInput2] = useState(0);

  const handleProductoSeleccionadoChange = (event, value) => {
    if (value) {
      let res = value.value;
      setProductoSeleccionado(res);
    } else {
      setProductoSeleccionado("");
    }
  };
  const handleProducto2SeleccionadoChange = (event, value) => {
    let res = value.value;
    if (value) {
      setProducto2Seleccionado(res);
    } else {
      setProducto2Seleccionado("");
    }
  };
  const handleProducto3SeleccionadoChange = (event, value) => {
    let res = value.value;

    if (value) {
      setProducto3Seleccionado(res);
    } else {
      setProducto3Seleccionado("");
    }
  };
  const handleProducto4SeleccionadoChange = (event, value) => {
    if (value) {
      let res = value.value;
      setProducto4Seleccionado(res);
    } else {
      setProducto4Seleccionado("");
    }
  };
  const handleProducto5SeleccionadoChange = (event, value) => {
    let res = value.value;

    if (value) {
      setProducto5Seleccionado(res);
    } else {
      setProducto5Seleccionado("");
    }
  };

  const handlePdf = async (event) => {
    event.preventDefault();
    try {
      const url =
        "https://res.cloudinary.com/dpz2wx43s/image/upload/v1702705197/eduplanet/pdfs/x5gjh2vpnynghxcq8x10.pdf";

      const url2 = "https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf";

      const existingPdfBytes = await fetch(url).then((res) =>
        res.arrayBuffer()
      );
      const fontBytes = await fetch(url2).then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      pdfDoc.registerFontkit(fontkit);
      const customFont = await pdfDoc.embedFont(fontBytes);

      const { width, height } = firstPage.getSize();
      //traer la info de la bd
      const nombre2 = "Farmacia Super super largo";
      const cadena2 = "PonienteSur ";
      let nombreWidth = nombre2.length;
      let cadenaWidth = cadena2.length;

      let textNWidth = customFont.widthOfTextAtSize(nombre2, nombreWidth);
      let textCWidth = customFont.widthOfTextAtSize(cadena2, cadenaWidth);

      firstPage.drawText(cadena2, {
        x: (width - textCWidth) / 2,
        y: 485,
        size: 20,
        font: customFont,
      });
      firstPage.drawText(nombre2, {
        x: (width - textNWidth) / 2,
        y: 505,
        size: 20,
        font: customFont,
      });
      firstPage.drawText(areasTratadas, {
        x: 100,
        y: 430,
        size: 10,
        font: customFont,
      });
      firstPage.drawText(poblacion, {
        x: 90,
        y: 445,
        size: 10,
        font: customFont,
      });
      console.log(tipoDeServicio);
      firstPage.drawText(tipoDeServicio, {
        x: 100,
        y: 418,
        size: 10,
        font: customFont,
      });
      firstPage.drawText("2da Aveninda Sur Poniente", {
        x: 70,
        y: 460,
        size: 10,
        font: customFont,
      });
      firstPage.drawText("Copoya", {
        x: 280,
        y: 460,
        size: 10,
        font: customFont,
      });
      firstPage.drawText("29100", {
        x: 450,
        y: 460,
        size: 10,
        font: customFont,
      });
      firstPage.drawText(plagasControladas, {
        x: 120,
        y: 395,
        size: 10,
        font: customFont,
      });
      firstPage.drawText(plagas2Controladas, {
        x: 180,
        y: 395,
        size: 10,
        font: customFont,
      });
      firstPage.drawText(plagas3Controladas, {
        x: 240,
        y: 395,
        size: 10,
        font: customFont,
      });
      firstPage.drawText(plagas4Controladas, {
        x: 300,
        y: 395,
        size: 10,
        font: customFont,
      });
      firstPage.drawText(plagas5Controladas, {
        x: 360,
        y: 395,
        size: 10,
        font: customFont,
      });
      firstPage.drawText("21/09/2023", {
        x: 55,
        y: 345,
        size: 10,
        font: customFont,
      });

      firstPage.drawText("21/03/2024", {
        x: 415,
        y: 345,
        size: 10,
        font: customFont,
      });
      firstPage.drawText("Productos Utilizados: ", {
        x: 10,
        y: 380,
        size: 10,
        font: customFont,
      });
      firstPage.drawText(productoSeleccionado, {
        x: 110,
        y: 380,
        size: 8,
        font: customFont,
      });
      firstPage.drawText(producto2Seleccionado, {
        x: 240,
        y: 380,
        size: 8,
        font: customFont,
      });
      firstPage.drawText(producto3Seleccionado, {
        x: 370,
        y: 380,
        size: 8,
        font: customFont,
      });
      firstPage.drawText(producto4Seleccionado, {
        x: 20,
        y: 368,
        size: 8,
        font: customFont,
      });
      firstPage.drawText(producto5Seleccionado, {
        x: 150,
        y: 368,
        size: 8,
        font: customFont,
      });

      const pdfBytes = await pdfDoc.save();
      setGeneratedPdf(pdfBytes); // Guarda los bytes del PDF generado en el estado local
      const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
    } catch (error) {
      console.error("Error al generar el PDF:", error);
    }
  };

  const handleSubmit = async (event) => {
    //fetch
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            margin: "0px",
            marginTop: "10px",
          }}
        >
          Editar Licencia Sanitaria
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form className="containerAgregarClientesFondo">
          <Grid
            container
            direction={"row"}
            spacing={2}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid item>
              <Grid
                container
                direction={"row"}
                spacing={2}
                display={"flex"}
                justifyContent={"center"}
              >
                <Grid item xs={12} lg={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <h1
                      style={{
                        margin: "5px",
                      }}
                    >
                      "Coca cola"
                    </h1>
                    <h2
                      style={{
                        margin: "0px",
                      }}
                    >
                      "Poniente"
                    </h2>
                  </div>
                  <Box
                    sx={{ minWidth: 120 }}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="data:image/png;base64,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"
                      alt="imagen"
                      className="animalito"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                  <Grid
                    container
                    spacing={2}
                    direction={"row"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Grid
                      item
                      xs={12}
                      lg={6}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <TextField
                        type="text"
                        name="poblacion"
                        placeholder="Poblacion"
                        fullWidth
                        value={poblacion}
                        onChange={(event) => {
                          setPoblacion(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={6}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <TextField
                        type="text"
                        name="areasTratadas"
                        placeholder="Areas Tratadas"
                        fullWidth
                        value={areasTratadas}
                        onChange={(event) => {
                          setAreasTratadas(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Autocomplete
                        disablePortal
                        id="tipoDeServicio"
                        options={TipoDeServicioArray}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        required
                        onChange={handleTipoDeServicio}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Tipos De Servicio" />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <Autocomplete
                        disablePortal
                        id="plagasControladas"
                        options={PlagasControladasArray}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        required
                        value={plagasControladas}
                        onChange={handlePlagasChange}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Plagas Controladas" />
                        )}
                      />
                    </Grid>
                    {showInput2 > 0 && (
                      <Grid item xs={12} lg={6}>
                        <Autocomplete
                          disablePortal
                          id="plagasControladas"
                          options={PlagasControladasArray}
                          getOptionLabel={(option) =>
                            typeof option === "string" ||
                            option instanceof String
                              ? option
                              : ""
                          }
                          required
                          onChange={handlePlagas2Change}
                          sx={{ width: "100%" }}
                          renderInput={(params) => (
                            <TextField {...params} label="Plagas Controladas" />
                          )}
                        />
                      </Grid>
                    )}
                    {showInput2 > 1 && (
                      <Grid item xs={12} lg={6}>
                        <Autocomplete
                          disablePortal
                          id="plagasControladas"
                          options={PlagasControladasArray}
                          getOptionLabel={(option) =>
                            typeof option === "string" ||
                            option instanceof String
                              ? option
                              : ""
                          }
                          required
                          onChange={handlePlagas3Change}
                          sx={{ width: "100%" }}
                          renderInput={(params) => (
                            <TextField {...params} label="Plagas Controladas" />
                          )}
                        />
                      </Grid>
                    )}
                    {showInput2 > 2 && (
                      <Grid item xs={12} lg={6}>
                        <Autocomplete
                          disablePortal
                          id="plagasControladas"
                          options={PlagasControladasArray}
                          getOptionLabel={(option) =>
                            typeof option === "string" ||
                            option instanceof String
                              ? option
                              : ""
                          }
                          required
                          onChange={handlePlagas4Change}
                          sx={{ width: "100%" }}
                          renderInput={(params) => (
                            <TextField {...params} label="Plagas Controladas" />
                          )}
                        />
                      </Grid>
                    )}
                    {showInput2 > 3 && (
                      <Grid item xs={12} lg={6}>
                        <Autocomplete
                          disablePortal
                          id="plagasControladas"
                          options={PlagasControladasArray}
                          getOptionLabel={(option) =>
                            typeof option === "string" ||
                            option instanceof String
                              ? option
                              : ""
                          }
                          required
                          onChange={handlePlagas5Change}
                          sx={{ width: "100%" }}
                          renderInput={(params) => (
                            <TextField {...params} label="Plagas Controladas" />
                          )}
                        />
                      </Grid>
                    )}

                    <Grid item xs={12} lg={6}>
                      <Box sx={{ width: "100%" }}>
                        <Autocomplete
                          id="opcionesProducto"
                          options={opcionesProductos}
                          autoHighlight
                          fullWidth
                          getOptionLabel={(option) => option.label}
                          getOptionSelected={(option, value) =>
                            option.value === value.value
                          }
                          value={opcionesProductos.find(
                            (option) => option.value === productoSeleccionado
                          )}
                          renderInput={(params) => (
                            <TextField {...params} label="Productos" />
                          )}
                          renderOption={(props, option) => (
                            <li {...props}>
                              <span
                                style={{
                                  color: "black",
                                }}
                              >
                                {option.label}
                              </span>{" "}
                              -{" "}
                              <span
                                style={{
                                  color: "black",
                                }}
                              >
                                {option.value}
                              </span>
                            </li>
                          )}
                          onChange={handleProductoSeleccionadoChange}
                        />
                      </Box>
                    </Grid>
                    {showInput > 0 && (
                      <Grid item xs={12} lg={6}>
                        <Box sx={{ width: "100%" }}>
                          <Autocomplete
                            id="opcionesProducto"
                            options={opcionesProductos}
                            autoHighlight
                            fullWidth
                            getOptionLabel={(option) => option.label}
                            getOptionSelected={(option, value) =>
                              option.value === value.value
                            }
                            value={opcionesProductos.find(
                              (option) => option.value === producto2Seleccionado
                            )}
                            renderInput={(params) => (
                              <TextField {...params} label="Productos" />
                            )}
                            renderOption={(props, option) => (
                              <li {...props}>
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.label}
                                </span>{" "}
                                -{" "}
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.value}
                                </span>
                              </li>
                            )}
                            onChange={handleProducto2SeleccionadoChange}
                          />
                        </Box>
                      </Grid>
                    )}
                    {showInput > 1 && (
                      <Grid item xs={12} lg={6}>
                        <Box sx={{ width: "100%" }}>
                          <Autocomplete
                            id="opcionesProducto"
                            options={opcionesProductos}
                            autoHighlight
                            fullWidth
                            getOptionLabel={(option) => option.label}
                            getOptionSelected={(option, value) =>
                              option.value === value.value
                            }
                            value={opcionesProductos.find(
                              (option) => option.value === producto3Seleccionado
                            )}
                            renderInput={(params) => (
                              <TextField {...params} label="Productos" />
                            )}
                            renderOption={(props, option) => (
                              <li {...props}>
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.label}
                                </span>{" "}
                                -{" "}
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.value}
                                </span>
                              </li>
                            )}
                            onChange={handleProducto3SeleccionadoChange}
                          />
                        </Box>
                      </Grid>
                    )}
                    {showInput > 2 && (
                      <Grid item xs={12} lg={6}>
                        <Box sx={{ width: "100%" }}>
                          <Autocomplete
                            id="opcionesProducto"
                            options={opcionesProductos}
                            autoHighlight
                            fullWidth
                            getOptionLabel={(option) => option.label}
                            getOptionSelected={(option, value) =>
                              option.value === value.value
                            }
                            value={opcionesProductos.find(
                              (option) => option.value === producto4Seleccionado
                            )}
                            renderInput={(params) => (
                              <TextField {...params} label="Productos" />
                            )}
                            renderOption={(props, option) => (
                              <li {...props}>
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.label}
                                </span>{" "}
                                -{" "}
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.value}
                                </span>
                              </li>
                            )}
                            onChange={handleProducto4SeleccionadoChange}
                          />
                        </Box>
                      </Grid>
                    )}
                    {showInput > 3 && (
                      <Grid item xs={12} lg={6}>
                        <Box sx={{ width: "100%" }}>
                          <Autocomplete
                            id="opcionesProducto"
                            options={opcionesProductos}
                            autoHighlight
                            fullWidth
                            getOptionLabel={(option) => option.label}
                            getOptionSelected={(option, value) =>
                              option.value === value.value
                            }
                            value={opcionesProductos.find(
                              (option) => option.value === producto5Seleccionado
                            )}
                            renderInput={(params) => (
                              <TextField {...params} label="Productos" />
                            )}
                            renderOption={(props, option) => (
                              <li {...props}>
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.label}
                                </span>{" "}
                                -{" "}
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.value}
                                </span>
                              </li>
                            )}
                            onChange={handleProducto5SeleccionadoChange}
                          />
                        </Box>
                      </Grid>
                    )}
                    <Grid
                      item
                      xs={12}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <Button
                        onClick={() => {
                          setShowInput(showInput + 1);
                          console.log(showInput);
                        }}
                      >
                        Agregar Producto Utilizado
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <Button
                        onClick={() => {
                          setShowInput2(showInput2 + 1);
                        }}
                      >
                        Agregar Plaga Controlada
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              maxHeight={50}
            >
              <Stack spacing={2} direction="row">
                <ColorButton onClick={handlePdf} variant="contained">
                  <p
                    style={{
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    AGREGAR
                  </p>
                </ColorButton>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              maxHeight={50}
            ></Grid>
          </Grid>

          {/* Agregar un enlace para descargar el PDF */}
        </form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {generatedPdf && (
          <a
            href={URL.createObjectURL(
              new Blob([generatedPdf], { type: "application/pdf" })
            )}
            download="Licencia Sanitaria.pdf"
          >
            Descargar PDF
          </a>
        )}
      </div>
    </>
  );
}
