var size = 0;
var placement = 'point';

var style_CallesNombradasenHonoraLosDesaparecidos_8 = function(feature, resolution){
    var labelText = ""; 
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";

    // Calculamos una escala que se mantenga estable
    // Si los ves muy chicos, subí el 0.04 a 0.05
    var baseScale = 0.04; 

    return [ new ol.style.Style({
        image: new ol.style.Icon({
            imgSize: [210, 297],
            scale: baseScale,
            // Anclaje al centro exacto del SVG
            anchor: [105, 148.5],
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            // Esto ayuda a que no "bailen" al mover el mapa
            opacity: 1,
            src: "styles/desaparecidos (1).svg"
        })
    })];
};