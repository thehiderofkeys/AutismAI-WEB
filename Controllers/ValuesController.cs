using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace AutismAI_Web.Controllers
{
    public class ValuesController : ApiController
    {

        // GET api/<controller>
        public async Task<IEnumerable<string>> Get()
        {
            var result = await GetDashboardStats();

            return new string[] { result };
        }

        private async Task<string> GetDashboardStats()
        {
            var client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync("https://rshahamiri.pythonanywhere.com/metrics");
            response.EnsureSuccessStatusCode();
            var result = await response.Content.ReadAsStringAsync();
            return result;
        }
        

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}