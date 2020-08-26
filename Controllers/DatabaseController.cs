using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using AutismAI_Web.Database;

namespace AutismAI_Web.Controllers
{
   
    public class DatabaseController : ApiController
    {
        private DbContext dbContext;

        public DatabaseController() {
            dbContext = new DbContext();

        }

        [HttpGet]
        public string Get()
        {
            dbContext.OpenAndCloseConnection();
            return "";
        }
    }
}