using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hamburgeria.Models.ViewModels;
using hamburgeria.Models;
using hamburgeria.Models.Services.Application;
using hamburgeria.Models.Enums;
using hamburgeria.Models.ValueTypes;

namespace hamburgeria.Models.ViewModels
{
    //classe che rappresenta l'entità CORSO
    public class MenuViewModel
    {
        public int Id {get; set;}
        public string Tipo {get; set;}
        public string ImgPath {get; set;}
        public string Nome {get; set;}
        public string Ingredienti {get; set;}
        //public Money Prezzo {get; set;}
        public string Prezzo {get; set;}
        public bool Disponibile {get; set;}
    }
}