class Zapatillas {

    constructor(pedido) {
        this.zapatillas;
        this.tamanio = pedido.tamanio
        this.medias = pedido.medias
        this.marcaNike = pedido.marcaNike
        this.marcaAdidas = pedido.marcaAdidas;
    }

    entregarZapatillas() {

        if (this.tamanio.toUpperCase() == "GRANDE") {

            this.zapatillas = "zapatillas grande"

        } else {

            this.zapatillas = "zapatillas mediana"
        }


        if (this.marcaNike != "" && this.marcaAdidas != "") {

            return "Aqui tiene sus " + this.zapatillas + " " + this.medias + " medias, con zapatillas marca " + this.marcaNike + " o " + this.marcaAdidas

        } else if (this.marcaNike != "" && this.marcaAdidas == "") {

            return "Aqui tiene sus " + this.zapatillas + " " + this.medias + " medias, " + " zapatillas marca " + this.marcaNike

        } else {

            return "Aqui tiene sus " + this.zapatillas + " " + this.medias + " medias "

        }

    }


}

let zapatillas = new Zapatillas({ tamanio: "", medias: "", marcaNike: "", marcaAdidas: "" })
zapatillas["tamanio"] = prompt("¿Qué tamaño de zapatillas necesita?")
zapatillas.medias = prompt("¿Las querés con o sin medias?")
zapatillas.marcaNike = prompt("¿tenemos zapatillas marca Nike o Adidas , cual prefiere?")

console.log(zapatillas.entregarZapatillas())