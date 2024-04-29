using System;
using System.Collections.Generic;
using System.Linq;
using hamburgeria.Models.ViewModels;

namespace hamburgeria.Models.Services.Application
{
    public interface ICarrelloService
    {
        List<MenuViewModel> GetCarrello();
        void AggiungiAlCarrello(MenuViewModel prodotto);
    }
}