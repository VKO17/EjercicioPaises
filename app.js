//const texto = "esto es texto";
//const boleans = false;

//console.log(texto);

const espana = document.getElementById("esp");
const colombia = document.getElementById("col");
const mexico = document.getElementById("mex");

const nombre = document.getElementById("nompa");
const texto = document.getElementById("infpa");

const arreglo = document.querySelectorAll("li");
const imag = document.querySelector("img");

function activo() {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i].onclick = function () {
            arreglo[i].classList.add("activo")
            nombre.textContent = arreglo[i].textContent
            quitarColor();
        }

    }
}

function quitarColor() {
    if (nombre.textContent === "España") {
        mexico.classList.remove("activo");
        colombia.classList.remove("activo");
        imag.setAttribute("src", "img\\esp.png")
        imag.style.width = "125%";
        imag.style.height = "100%";
        texto.textContent = "España o Reino de España es un país situado en el sur de Europa occidental y norte de África, que está compuesto por comunidades autónomas y es miembro de la Unión Europea. La capital de España es la ciudad de Madrid y es un país gobernado por una monarquía parlamentaria bajo una forma de gobierno democrática. Sus costumbres, historia y geografía convierten a España en uno de los países más visitados del mundo y una de las principales economías mundiales.España tiene una extensión territorial de 505.370 km² y es el 4º país más extenso del continente europeo (detrás de Rusia, Ucrania y Francia). Dentro de Europa, España ocupa la península ibérica, más conocida como España peninsular, y las islas Baleares. En África el territorio de España se extiende por las ciudades de Ceuta y Melilla y las islas Canarias, Chafarinas, Alhucemas, isla de Alborán y el peñón de Vélez de la Gomera";
        texto.style.textAlign = "justify";
    } else if (nombre.textContent === "México") {
        espana.classList.remove("activo");
        colombia.classList.remove("activo");
        imag.setAttribute("src", "img\\mex.png")
        imag.style.width = "125%";
        imag.style.height = "100%";
        texto.textContent = "México, conocido oficialmente como Estados Unidos Mexicanos, es una nación soberana de la América del Norte, de cultura latinoamericana, cuyo territorio fue cuna de una de las civilizaciones más antiguas del mundo: la mesoamericana. El nombre del país proviene de la lengua náhuatl, Mēxihco, vocablo con el que los antiguos mexicas o aztecas bautizaron su capital (México-Tenochtitlán) y cuya traducción es materia de debate. Algunas teorías apuntan a que significaría “lugar del Mexihtli”, uno de los nombres del dios tutelar azteca Huitzilopochtli. México alberga numerosos yacimientos arqueológicos de la época precolombina, así como monumentos (pirámides) indígenas y mucha evidencia de su historia colonial. Esto lo convierte en el destino turístico más visitado de América Latina y el noveno del mundo.";
    } else if (nombre.textContent === "Colombia") {
        mexico.classList.remove("activo");
        espana.classList.remove("activo");
        imag.setAttribute("src", "img\\col.png")
        imag.style.width = "125%";
        imag.style.height = "100%";
        texto.textContent = "Colombia está ubicada en el extremo noroccidental de Suramérica y es el único país del subcontinente con costas sobre los océanos Atlántico y Pacífico. Su superficie terrestre es 1'141.748 km2 y cuenta con 928.660 km2 de dominios marítimos. Comparte fronteras con Panamá, Venezuela, Brasil, Perú y Ecuador y límites marítimos con Costa Rica, Nicaragua, Honduras, Jamaica, República Dominicana y Haití. Es una nación ecuatorial cuyo clima está determinado por los vientos alisios, la humedad y la altitud sobre el nivel del mar: a mayor altitud la temperatura es más baja. El régimen de estaciones es bimodal y en casi todo el territorio se presentan dos períodos de lluvia —de abril a junio y de agosto a noviembre— y dos de verano.El país disfruta de una luminosidad constante durante todo el año, con igual cantidad de horas diurnas y nocturnas.";
    }
}


activo();