// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function CreaCard(){
    let nuovaCard = document.createElement('div');
    nuovaCard.classList.add("card");

    let nuovaCardImg = document.createElement('img');
    nuovaCardImg.classList.add("card-img-top");
    nuovaCardImg.src="";
    //src e alt dell'immagine dipendono dal singolo cibo
    nuovaCard.appendChild(nuovaCardImg);

    let nuovaCardBody = document.createElement('div');
    nuovaCardBody.classList.add("card-body");
    let nuovaCardBodyTitle = document.createElement('h5');
    nuovaCardBodyTitle.classList.add("card-title");
    let nuovaCardBodyTitleText = document.createTextNode("nome");
    nuovaCardBodyTitle.appendChild(nuovaCardBodyTitleText);
    let nuovaCardBodyP = document.createElement('p');
    nuovaCardBodyP.classList.add("card-text");
    let nuovaCardBodyPText = document.createTextNode("ingredienti");
    nuovaCardBodyP.appendChild(nuovaCardBodyPText);
    nuovaCardBody.appendChild(nuovaCardBodyTitle);
    nuovaCardBody.appendChild(nuovaCardBodyP);
    nuovaCard.appendChild(nuovaCardBody);

   
    let nuovaCardFooter = document.createElement("div");
    nuovaCardFooter.classList.add("card-footer");
    let nuovaCardFooterBtn = document.createElement('a');
    nuovaCardFooterBtn.classList.add("btn"); 
    nuovaCardFooterBtn.classList.add("btn-primary");
    nuovaCardFooterBtn.classList.add(".open-modal1");
    nuovaCardFooterBtn.href = "#";
    let nuovaCardFooterBtnImg = document.createElement('img');
    nuovaCardFooterBtnImg.width = "30"; 
    nuovaCardFooterBtnImg.height = "30";
    nuovaCardFooterBtnImg.src = "../img/carrello.png";
    //let nuovaCardFooterBtnText = document.createElement("h6");
    let nuovaCardFooterBtnText = document.createTextNode("Euro ");
    nuovaCardFooterBtn.appendChild(nuovaCardFooterBtnText);
    nuovaCardFooterBtn.appendChild(nuovaCardFooterBtnImg);
    nuovaCardFooter.appendChild(nuovaCardFooterBtn);
    nuovaCard.appendChild(nuovaCardFooter);

    return nuovaCard;
}

function CreaCardCarrello(){
    let nuovaCard = document.createElement('div');
    nuovaCard.classList.add("card");

    let nuovaCardImg = document.createElement('img');
    nuovaCardImg.classList.add("card-img-top");
    nuovaCardImg.src="";
    //src e alt dell'immagine dipendono dal singolo cibo
    nuovaCard.appendChild(nuovaCardImg);

    let nuovaCardBody = document.createElement('div');
    nuovaCardBody.classList.add("card-body");
    let nuovaCardBodyTitle = document.createElement('h5');
    nuovaCardBodyTitle.classList.add("card-title");
    let nuovaCardBodyTitleText = document.createTextNode("nome");
    nuovaCardBodyTitle.appendChild(nuovaCardBodyTitleText);
    let nuovaCardBodyP = document.createElement('p');
    nuovaCardBodyP.classList.add("card-text");
    let nuovaCardBodyPText = document.createTextNode("ingredienti");
    nuovaCardBodyP.appendChild(nuovaCardBodyPText);
    nuovaCardBody.appendChild(nuovaCardBodyTitle);
    nuovaCardBody.appendChild(nuovaCardBodyP);
    nuovaCard.appendChild(nuovaCardBody);

   
    let nuovaCardFooter = document.createElement("div");
    nuovaCardFooter.classList.add("card-footer");
    let nuovaCardFooterBtn = document.createElement('a');
    nuovaCardFooterBtn.classList.add("btn"); 
    nuovaCardFooterBtn.classList.add("btn-primary");
    nuovaCardFooterBtn.classList.add(".open-modal1");
    nuovaCardFooterBtn.href = "#";
    let nuovaCardFooterBtnText = document.createTextNode("Rimuovi");
    nuovaCardFooterBtn.appendChild(nuovaCardFooterBtnText);
    nuovaCardFooter.appendChild(nuovaCardFooterBtn);
    nuovaCard.appendChild(nuovaCardFooter);

    return nuovaCard;
}

function AggiungiCibo(cibo){
    
    let nuovaCard = CreaCard();

    //card creata

    nuovaCard.id=""
    //setto i valori del cibo che voglio aggiungere
   $(nuovaCard).children('img')[0].src = cibo.immagine;
   $(nuovaCard).children('img')[0].alt = cibo.nome;

   nuovaCard.children[1].querySelector('h5').textContent = cibo.nome;
   nuovaCard.children[1].querySelector('p').textContent = cibo.ingredienti;
   nuovaCard.children[2].querySelector('a').textContent += cibo.prezzo;
   nuovaCard.disponibile = cibo.disponibile;

   //se è un panino personalizzato, lo aggiungo al carrello 
   if(cibo.nome == "Personalizzato"){
    document.getElementById("carrello_panini_container").appendChild(nuovaCard);
   }
   else{
        //ora la appendo nel card-deck dei panini / frittura / taglieri
        //in base al tipo
        if(cibo.tipo=="panino"){
            document.getElementById("menu_panini_container").appendChild(nuovaCard);
        }
        else if(cibo.tipo=="frittura"){
            document.getElementById("menu_frittura_container").appendChild(nuovaCard); 
        }
        else if(cibo.tipo=="tagliere"){
            document.getElementById("menu_taglieri_container").appendChild(nuovaCard);
        }
   }
}

function AggiungiCiboCarrello(cibo){
    
    let nuovaCard = CreaCardCarrello();

    //card creata
    nuovaCard.setAttribute("id", cibo.id);
    //nuovaCard.Id.Add(cibo.id);
    //setto i valori del cibo che voglio aggiungere
   $(nuovaCard).children('img')[0].src = cibo.immagine;
   $(nuovaCard).children('img')[0].alt = cibo.nome;

   nuovaCard.children[1].querySelector('h5').textContent = cibo.nome;
   nuovaCard.children[1].querySelector('p').textContent = cibo.ingredienti;
   nuovaCard.children[2].querySelector('a').textContent += cibo.prezzo;
   nuovaCard.disponibile = cibo.disponibile;

   document.getElementById("carrello_panini_container").appendChild(nuovaCard);
}


var panini = [
    ham1 = {
        id: "ham1",
        tipo: "panino",
        nome: "Classico Americano", 
        ingredienti: "Bun, cheddar, hamburger, patatine, cipolla, insalata, pomodori, salsa BBQ",
        immagine: "img/ham1.jpg",
        prezzo: "9,50",
        disponibile: true
    },

    ham2 = {
        id: "ham2",
        tipo: "panino",
        nome: "Veggie Bun", 
        ingredienti: "Bun semolato, hamburger di zucca, insalata, formaggio veg, cipolla, pomodori",
        immagine: "img/ham2.jpg",
        prezzo: "8,50",
        disponibile: true
    },

    ham3 = {
        id: "ham3",
        tipo: "panino",
        nome: "Pollo Fritto", 
        ingredienti: "Bun, pollo fritto, insalata, maionese al pepe, formaggio fuso, patate",
        immagine: "img/ham3.jpg",
        prezzo: "9,00",
        disponibile: true
    },

    ham4 = {
        id: "ham4",
        tipo: "panino",
        nome: "Black Porchetta", 
        ingredienti: "Pane morbido integrale, porchetta di Ariccia, provola, insalata, cipolla rossa, broccoli",
        immagine: "img/ham4.jpg",
        prezzo: "10,50",
        disponibile: true
    },

    ham5 = {
        id: "ham5",
        tipo: "panino",
        nome: "Mediterraneo", 
        ingredienti: "Bun ai cereali, melanzane fritte, pomodori secchi, mozzarella di bufala, basilico",
        immagine: "img/ham5.jpg",
        prezzo: "11,00",
        disponibile: true
    },

    ham6 = {
        id: "ham6",
        tipo: "panino",
        nome: "Cotto e Mozzarella", 
        ingredienti: "Rosetta ai semi, prosciutto cotto arrosto, stracciata di bufala, erba cipollina",
        immagine: "img/ham6.jpg",
        prezzo: "9,50",
        disponibile: true
    } 
];

var fritture = [
    fritti1 = {
        id: "fritti1",
        tipo: "frittura",
        nome: "Fritto Misto", 
        ingredienti: "Patate schiacciate e fritte, gamberi, calamari, polpettine di pesce, frutti di mare",
        immagine: "img/fritt1.jpg",
        prezzo: "7,00",
        disponibile: true
    },

    fritti2 = {
        id: "fritti2",
        tipo: "frittura",
        nome: "Mare Fritto", 
        ingredienti: "Gamberi, calamari, triglie e merluzzetti. Puoi scegliere se rimuovere un ingrediente.",
        immagine: "img/fritt2.jpg",
        prezzo: "9,00",
        disponibile: true
    },

    fritti3 = {
        id: "fritti3",
        tipo: "frittura",
        nome: "Patate fresche fritte", 
        ingredienti: "Puoi aggiungere diverse salse: BBQ, Lime e pepe rosa, Maionese fatta in casa..",
        immagine: "img/fritt3.jpg",
        prezzo: "5,00",
        disponibile: true
    },

    fritti4 = {
        id: "fritti4",
        tipo: "frittura",
        nome: "Fritto Verde", 
        ingredienti: "Fiori di zucca in pastella, ripieni di ricotta fresca e fritti.",
        immagine: "img/fritt4.jpg",
        prezzo: "9,00",
        disponibile: true
    }
];

var taglieri = [
    tagliere1 = {
        id: "tagliere1",
        tipo: "tagliere",
        nome: "Tagliere luxury", 
        ingredienti: "Salame blu, ricotta fresca, capicollo, bresaola, formaggi, frutta, olive, pane tostato, miele, mamellate, salse.",
        immagine: "img/tagl1.webp",
        prezzo: "30,00",
        disponibile: true
    },

    tagliere2 = {
        id: "tagliere2",
        tipo: "tagliere",
        nome: "Tagliere piccolo", 
        ingredienti: "Salame, prosciutto crudo, pancetta, grissini.",
        immagine: "img/tagl2.jpg",
        prezzo: "10,00",
        disponibile: true
    },

    tagliere3 = {
        id: "tagliere3",
        tipo: "tagliere",
        nome: "Tagliere medio", 
        ingredienti: "Mortadella, prosciutto crudo, capicollo, pancetta, salame dolce, salame piccante, formaggi, olive.",
        immagine: "img/tagl3.jpg",
        prezzo: "15,00",
        disponibile: true
    }
];


var menu = [panini, fritture, taglieri];

//setto tutti i prodotti esistenti come disponibili
//non è obbligatorio, potrei anche non farlo...
var lista_card = document.getElementsByClassName("card");
for(var i=0; i<lista_card.length;i++){
    lista_card[i].disponibile=true;
}

//aggiungo tutti i prodotti al menu (volendo potrei anche decidere di aggiungere solo quelli disponibili)
for(i=0;i<menu.length;i++){
    menu[i].forEach(function (prodotto) {
        //if(prodotto.disponibile)
        AggiungiCibo(prodotto);
    });
}


//posso aggiungere al carrello solo i prodotti disponibili, altrimenti appare una finestra di alert
//questo sarebbe da integrare con la funzione di paolo, il controllo si può fare quando si aggiunge al carrello
function eseguiAlert(x)
{
    let bottoni_card = document.getElementsByClassName("btn btn-primary");
    bottoni_card[x].addEventListener('click', function() {alert_carrello(bottoni_card[x]);});
}

function alert_carrello(bottone)
{
    alert("Prodotto non disponibile!");
}

var bottoni_card = document.getElementsByClassName("btn btn-primary");
for (var i=0;i <bottoni_card.length; i++ )
{
    //aggiungi if: vedi alert solo se il panino non è disponibile
    if(bottoni_card[i].parentNode.parentNode.disponibile == false)
        eseguiAlert(i);
}


//CAMBIA BORDO DELLE IMMAGINI DEI PRODOTTI QUANDO CI PASSO SOPRA
function esegui(x)
{
    let immagini_card = document.getElementsByClassName("card-img-top");

    immagini_card[x].addEventListener('mouseover', function() {zoom_img(immagini_card[x]);});
    immagini_card[x].addEventListener('mouseout', function() {no_zoom_img(immagini_card[x]);});  
}

function zoom_img(immagine)
{
    immagine.style.border="solid";   
    //immagine.parentNode.style.border = "solid";
}

function no_zoom_img(immagine)
{
    immagine.style.border="none";   
    //immagine.style.width = "auto";  
}

var immagini_card = document.getElementsByClassName("card-img-top");
for (var i=0;i <immagini_card.length; i++ )
{
    esegui(i);
}



//---------- PANINO PERSONALIZZATO --------

// Funzione per salvare il panino personalizzato e aggiungerlo al carrello
function salvaPaninoPersonalizzato() {
    
    var ingredienti = $('#ingredienti-selezionati').text().split(',').length; 
    let prezzo = ingredienti * 1.50;
    prezzo += ",00"; //converto prezzo in stringa
    var ingredientiText = $('#ingredienti-selezionati').text().split(',');
    
    personalizzato = {
        tipo: "panino",
        nome: "Personalizzato", 
        ingredienti: ingredientiText,
        immagine: "img/ham7.jpg",
        prezzo: prezzo,
        disponibile: true
    } 
    panini.push(personalizzato);
    AggiungiCibo(personalizzato);
   
    $('#myModal2').css('display', 'none');
}

$(document).ready(function(){
$("#sezioneTitolo").hide(1).show(800)
})

$(document).ready(function () {
    $('.card').on({
        mouseenter: function () {
            $(this).css('cursor', 'url("../img/pointer.png"), auto');
        },
        mouseleave: function () {
            $(this).css('cursor', 'auto');
        }
    });
});

$(document).ready(function() {
    // Nasconde e mostra #sezioneTitolo con effetto di dissolvenza
    $("#sezioneTitolo").hide().show(800);

    // Imposta il cursore personalizzato sulle card al passaggio del mouse
    $('.card').on({
        mouseenter: function() {
            $(this).css('cursor', 'url("../img/pointer.png"), auto');
        },
        mouseleave: function() {
            $(this).css('cursor', 'auto');
        }
    });

    // Apre e chiude il modal2
    $('.open-modal2').click(function() {
        $('#myModal2').css('display', 'block');
    });

    $(window).click(function(event) {
        if (event.target == $('#myModal2')[0]) {
            $('#myModal2').css('display', 'none');
        }
    });

    // Salva il panino personalizzato
    $('#salvaIngredienti').click(function() {
        var pane = $('#scelta-panino option:selected').text();
        var base = $('#scelta-base option:selected').text();
        var contorno1 = $('#scelta-contorno1 option:selected').text();
        var contorno2 = $('#scelta-contorno2 option:selected').text();

        if (pane === "---" || base === "---" || contorno1 === "---" || contorno2 === "---") {
            alert("Dicci come vuoi il tuo panino");
            return;
        }

        console.log(pane + base + contorno1 + contorno2)
        var ingredientiSelezionati = pane + ", " + base + ", " + contorno1 + ", " + contorno2;

        $('#ingredienti-selezionati').html(ingredientiSelezionati);
        salvaPaninoPersonalizzato();
    });
});


// Apre e chiude il modal1 (CARRELLO)
$('.open-modal1').click(function() {
    $('#myModal1').css('display', 'block');
});

$(window).click(function(event) {
    if (event.target == $('#myModal1')[0]) {
        $('#myModal1').css('display', 'none');
    }
});


//ORA DEVO COLLEGARE AI BOTTONI DELLE CARD
//UN EVENTO CLICK CHE AGGINGE QUELL'ELEMENTO AL CARRELLO (CLONA LA CARD IN CUI SI TROVA IL BOTTONE)
//POI DEVO CREARE UNA FUNZIONE SUL CLICK DEL BOTTONE DELL'ELEMENTO NEL CARRELLO
//CHE RIMUOVE L'ELEMENTO

$(".btn").click(function(){

    //ORA HO UN PROBLEMA CON LE CARD PERSONALIZZABILI, PERCHè MI AGGIUNGE ANCHE LA LORO CARD..
    //come la risolvo?
    //quando clicco sul bottone di un personalizzabile deve aprirmi li modal (e lo fa)

    var card = $(this).parent().parent().clone(); 

    var priceText = card.find("a").text();// Trova il testo del prezzo nella card
    var price = parseFloat(priceText.replace("Euro ", "").replace(",", ".")); // Estrai il prezzo come numero float

    var productName = card.find(".card-title").text().trim(); // Ottieni il nome del prodotto dalla card

    var existingCard = $("#carrello_panini_container").find(".card .card-title").filter(function() {
        return $(this).text().trim() === productName;
    }).closest(".card");
    //controlla tra le card nel carrello se trova quel prodotto
    if (existingCard.length > 0) {
        existingCard.find(".btn-plus").click(); // Simula un clic sul pulsante "+" per aggiornare la quantità
        updateTotalPrice(price); // Aggiorna il prezzo totale aggiungendo il prezzo della card aggiunta        
    }    
    else if(card.hasClass("copiati")){
        card.remove(); // Rimuovi la card dal carrello
        updateTotalPrice(-price); // Aggiorna il prezzo totale sottraendo il prezzo della card rimossa
    } else {
        var clonedCard = card.clone(); // Clona la card
        clonedCard.width("200px").removeAttr("id").addClass("copiati"); // Imposta larghezza, rimuovi ID e aggiungi classe
        var btnRemove = $("<button></button>").text("Rimuovi").addClass("btn-rimuovi btn btn-primary"); // Crea bottone Rimuovi
        btnRemove.click(function() {
            $(this).closest(".card").remove(); // Rimuovi la card quando il bottone viene cliccato
            updateTotalPrice(-price); // Aggiorna il prezzo totale sottraendo il prezzo della card rimossa
        });

        var quantityContainer = $("<div></div>").addClass("quantity-container"); // Crea un elemento contenitore per la quantità e i pulsanti
        var quantityElement = $("<div></div>").addClass("quantity").text("Quantità 1"); // Crea div della quantità
        var quantityPlusButton = $("<button></button>").text("+").addClass("btn-plus btn btn-secondary"); // Crea bottone per incrementare la quantità
        var quantityMinusButton = $("<button></button>").text("-").addClass("btn-minus btn btn-secondary"); // Crea bottone per decrementare la quantità
        var totalPriceElement = $("<div></div>").addClass("total-price").text("Euro " + price.toFixed(2).replace(".", ",")); // Crea div del prezzo totale
        
        quantityPlusButton.click(function() {
            var currentQuantity = parseInt($(this).siblings(".quantity").text().replace("Quantità ", ""));
            var newQuantity = currentQuantity + 1;
            $(this).siblings(".quantity").text("Quantità " + newQuantity); // Incrementa la quantità
            var newPrice = price * newQuantity;
            $(this).siblings(".total-price").text("Euro " + newPrice.toFixed(2).replace(".", ",")); // Aggiorna il prezzo totale
            updateTotalPrice(price); // Aggiorna il prezzo totale aggiungendo il prezzo della card aggiunta
            var priceButton = $(this).closest(".card").find(".btn-price");
            priceButton.text("Euro " + newPrice.toFixed(2).replace(".", ",")); // Aggiorna il prezzo nel bottone del prezzo
        });
        
        quantityMinusButton.click(function() {
            var currentQuantity = parseInt($(this).siblings(".quantity").text().replace("Quantità ", ""));
            if (currentQuantity > 1) {
                var newQuantity = currentQuantity - 1;
                $(this).siblings(".quantity").text("Quantità " + newQuantity); // Decrementa la quantità
                var newPrice = price * newQuantity;
                $(this).siblings(".total-price").text("Euro " + newPrice.toFixed(2).replace(".", ",")); // Aggiorna il prezzo totale
                updateTotalPrice(-price); // Aggiorna il prezzo totale sottraendo il prezzo della card rimossa
                var priceButton = $(this).closest(".card").find(".btn-price");
                priceButton.text("Euro " + newPrice.toFixed(2).replace(".", ",")); // Aggiorna il prezzo nel bottone del prezzo
            }
        });
        
        quantityContainer.append(quantityElement, quantityMinusButton, quantityPlusButton, totalPriceElement); // Aggiungi l'elemento della quantità e i pulsanti al contenitore
        clonedCard.append(btnRemove, quantityContainer); // Aggiungi il bottone rimuovi e il contenitore della quantità alla card clonata
        $("#carrello_panini_container").append(clonedCard); // Aggiungi la card clonata al carrello
        updateTotalPrice(price); // Aggiorna il prezzo totale aggiungendo il prezzo della card aggiunta
    }
});

function updateTotalPrice(amount) {
    var totalPriceText = $("#total-price").text(); // Trova il testo del prezzo totale attuale
    var currentPrice = parseFloat(totalPriceText.replace("Euro ", "").replace(",", ".")); // Estrai il prezzo totale come numero float
    var newPrice = currentPrice + amount; // Calcola il nuovo prezzo totale
    $("#total-price").text("Euro " + newPrice.toFixed(2).replace(".", ",")); // Aggiorna il testo del prezzo totale nel carrello

    if ($("#carrello_panini_container").find(".card").length === 0) {
        $("#total-price").text("Euro 0,00"); // Azzeramento del totale quando non ci sono più elementi nel carrello
    }
}


