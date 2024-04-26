using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hamburgeria.Models.ViewModels;
using hamburgeria.Models.ValueTypes;
using hamburgeria.Models.Enums;

namespace hamburgeria.Models.Services.Application
{
    public class MenuService : IMenuService
    {
        //metodo che recupera la lista di tutti i prodotti del menu
        public List<MenuViewModel> GetMenu()
        {
            var menuList = new List<MenuViewModel>();
            var rand = new Random();

            for(int i = 1; i <= 8; i++){
                var price = Convert.ToDecimal(rand.NextDouble() * 10 + 10);
                var prodotto = new MenuViewModel{
                    Id = i,
                    Tipo = $"Prodotto {i}",
                    Nome = $"Giorgia {i}",
                    ImgPath = "img/ham1.jpg",
                    Ingredienti = "Bun, cheddar, hamburger, patatine, cipolla, insalata, pomodori, salsa BBQ",
                    //Prezzo = "new Money(Currency.EUR, rand.NextDouble() > 0.5 ? price : price - 1)",
                    Prezzo = "Euro 10,00",
                    Disponibile = true,
                    IsInCarrello = false,
                };
                menuList.Add(prodotto);
            } 
            return menuList;
        } 

        /*
        //metodo che recupera i dettagli di un corso, dato l'id specifico
        public CourseDetailViewModel GetCourse(int id)
        {
            var rand = new Random();
            var price = Convert.ToDecimal(rand.NextDouble() * 10 + 10);
            var course = new CourseDetailViewModel{
                Id = id,
                Titolo = $"Corso {id}",
                Autore = $"Giorgia {id}",
                ImgPath = "/logo.svg",
                Rating = rand.Next(10,50)/10.0, //num decimale compreso fra 1 e 5
                PrezzoFull = new Money(Currency.EUR, rand.NextDouble() > 0.5 ? price : price - 1),
                PrezzoScontato = new Money(Currency.EUR, price),
                Descrizione = $"Descrizione {id}",
                Lezioni = new List<LessonViewModel>()
            };

            for(var i = 1; i <= 5; i++){
                var lezione = new LessonViewModel{
                    Titolo  = $"Lezione {id}",
                    Durata = TimeSpan.FromSeconds(rand.Next(40,90))
                };
                course.Lezioni.Add(lezione);
            }
            return course;
        }*/

    }
}