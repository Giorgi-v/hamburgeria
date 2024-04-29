using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;

namespace hamburgeria.Models.ViewModels
{
    //classe che rappresenta l'entità CORSO
    public class MenuViewModel
    {
        public int Id { get; set; }

        public string ImgPath { get; set; }
        public string Nome { get; set; }
        public string Ingredienti { get; set; }
        //public Money Prezzo {get; set;}
        public string Prezzo { get; set; }


        public static MenuViewModel FromDataRow(DataRow paninoRow)
        {
            var menuViewModel = new MenuViewModel
            {
                Nome = Convert.ToString(paninoRow["nome"]),
                ImgPath = Convert.ToString(paninoRow["immagine"]),
                Ingredienti = Convert.ToString(paninoRow["ingredienti"]),
                Prezzo = Convert.ToString(paninoRow["prezzo"]),
                Id = Convert.ToInt32(paninoRow["Idpanini"])

            };
            return menuViewModel;
        }

    }


}