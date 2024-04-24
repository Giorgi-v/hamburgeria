using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hamburgeria.Models.ViewModels;
using hamburgeria.Models.ValueTypes;
using hamburgeria.Models.Enums;

namespace hamburgeria.Models.ViewModels
{
    //classe che estende l'entità Corso, aggiungendo descrizione e lista di lezioni
    //che mi serviranno nella pagina di dettaglio
    public class MenuDetailViewModel : MenuViewModel
    {
        /*
        public string Descrizione {get; set;}
        public List<LessonViewModel> Lezioni {get; set;}
        public TimeSpan TotalCourseDuration
        {
            get => TimeSpan.FromSeconds(Lezioni?.Sum(l => l.Durata.TotalSeconds) ?? 0);
        }*/
    }
}