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
            carrelloList = new List<MenuViewModel>();
            this.carrelloList = carrelloList;
        }
        
        public void AggiungiAlCarrello(MenuViewModel prodotto){
            carrelloList.Add(prodotto); 
        }

        public List<MenuViewModel> GetCarrello()
        {
            return carrelloList;
        }
    }
}