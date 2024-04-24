using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hamburgeria.Models.ViewModels;

namespace hamburgeria.Models.ViewModels
{
    public class LessonViewModel   
    {
        public string Titolo {get; set;}
        public TimeSpan Durata {get; set;}        
    }
}