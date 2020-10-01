using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Http;
using System.Web.Http;
using System.Threading.Tasks;


namespace AutismAI_Web.Controllers
{
    public class PredictController : ApiController
    {
        // Post api/<controller>
        public async Task<string> Post([FromBody]string userData)
        {
            //var client = new HttpClient();
            var baseUrl = "https://rshahamiri.pythonanywhere.com/predict/6Hnka286";

            Console.WriteLine(userData);
               
            //HttpResponseMessage response = await client.GetAsync(baseUrl);
            //response.EnsureSuccessStatusCode();
            //var result = await response.Content.ReadAsStringAsync();
            return userData;
        }
    }
}
