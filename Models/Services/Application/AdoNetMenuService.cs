using System;
using System.Collections.Generic;
using System.Linq;
using hamburgeria.Models.ViewModels;
using hamburgeria.Models.Services.Infrastractures;
using System.Data;

namespace hamburgeria.Models.Services.Application
{
    public class AdoNetMenuService : IMenuService
    {
         private readonly IDatabaseAccessor db;
         public AdoNetMenuService(IDatabaseAccessor db)
        {
            this.db=db;
        }

        public List<MenuViewModel>GetMenu()
        {
            string query = "SELECT * FROM panini";
             DataSet dataSet= db.Query(query);
            var dataTable= dataSet.Tables[0];
             var paninoList = new List<MenuViewModel>();
               foreach(DataRow paninoRow in dataTable.Rows)
            {
                MenuViewModel menu = MenuViewModel.FromDataRow(paninoRow);
                paninoList.Add(menu);
            }
            return paninoList;
        }
    }
}