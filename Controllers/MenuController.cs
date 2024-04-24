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
        private readonly IMenuService menuService; //oggetto che deve essere automaticamente iniettato da asp.netcore 
        //quando viene invocato questo controller
        //è una interfaccia per realizzare il disaccoppiamento debole (dependency injection)
        public MenuController(IMenuService menuService)
        {
            //verrà iniettato automaticamente un oggetto di una classe che implementa l'interfaccia ICourseService
            this.menuService = menuService;
        }

        public IActionResult Index()
        {
            ViewData["Title"] = "MENU";
            List<MenuViewModel> menu = menuService.GetMenu();
            return View(menu); //ritorna la lista di tutti i prodotti del menu
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