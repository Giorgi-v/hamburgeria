using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hamburgeria.Models.ViewModels;

namespace hamburgeria.Models.Services.Application
{

    public class CarrelloService :ICarrelloService
    {
        public List<MenuViewModel> carrelloList {get; set;}

        public CarrelloService(List<MenuViewModel> carrelloList){
            this.carrelloList = carrelloList;
        }
        
        public void AggiungiAlCarrello(int id){

            //for che scorre tutti i prodotti del menu (MA LA LISTA CON TUTTI I PRODOTTI DOVE LA TROVO)
            //trova quello con quell id
            //e lo aggiunge al carrello
            carrelloList.Add(prodotto); 
        }

        public List<MenuViewModel> GetCarrello()
        {
            foreach(MenuViewModel prodotto in menuList){
                if(prodotto.IsInCarrello == true)
                   carrelloList.Add(prodotto); 
            } 
            return carrelloList;
        }
    }
}