using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hamburgeria.Models.ViewModels;

namespace hamburgeria.Models.Services.Application
{
    //questa interfaccia include i metodi che un servizio,
    //per poter essere compatibile con il controller;
    //deve implementare affinchè funzioni
    public interface IMenuService
    {
        List<MenuViewModel> GetMenu();
        //CourseDetailViewModel GetCourse(int id);
    }
}