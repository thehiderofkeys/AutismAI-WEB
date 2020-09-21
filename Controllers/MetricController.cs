using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace AutismAI_Web.Controllers
{
    public class MetricController : ApiController
    {
        // GET api/<controller>
        public async Task<string> Get()
        {
            var client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync("https://rshahamiri.pythonanywhere.com/metrics");
            response.EnsureSuccessStatusCode();
            var result = await response.Content.ReadAsStringAsync();
            return result;
        }
    }
}