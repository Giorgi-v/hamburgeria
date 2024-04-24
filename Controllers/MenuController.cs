using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using hamburgeria.Models;
using hamburgeria.Models.Services.Application;
using hamburgeria.Models.ViewModels;

namespace hamburgeria.Controllers
{
    public class MenuController : Controller
    {
        private readonly IMenuService menuService; 
        private readonly ICarrelloService carrelloService; 
        public MenuController(IMenuService menuService, ICarrelloService carrelloService)
        {
            //verrà iniettato automaticamente un oggetto di una classe che implementa l'interfaccia ICourseService
            this.menuService = menuService;
            this.carrelloService = carrelloService;
        }

        public IActionResult Index()
        {
            ViewData["Title"] = "MENU";
            List<MenuViewModel> menu = menuService.GetMenu();
            return View(menu); //ritorna la lista di tutti i prodotti del menu
        }

        public IActionResult Carrello(int id)
        {
            ViewData["Title"] = "CARRELLO";

             //se gli passo un id, aggiungo il prodotto al carrello
            if(id != 0){
                carrelloService.AggiungiAlCarrello(id);
            }

            List<MenuViewModel> carrello = carrelloService.GetCarrello();
            return View(carrello); //ritorna la lista di tutti i prodotti del menu che sono stati aggiunti al carrello
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}