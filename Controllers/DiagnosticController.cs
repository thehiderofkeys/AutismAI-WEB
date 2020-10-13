using System;
using System.Net.Http;
using System.Web.Http;
using System.Threading.Tasks;


namespace AutismAI_Web.Controllers
{
    public class DiagnosticController : ApiController
    {
        // Post api/<controller>
        public async Task<string> Post([FromBody] DiagnosisResponse userData)
        {
            var client = new HttpClient();
            var baseUrl = "http://rshahamiri.pythonanywhere.com/";

            if (userData.formalDiag == "0")
            {
                
                baseUrl += "insert_new_row/";
            } else
            {
                // Don't change spelling
                baseUrl += "insert_new_row/WithDiognosis/";
            }

            Console.WriteLine(baseUrl + userData.Concatenate());

            HttpResponseMessage response = await client.GetAsync(baseUrl + userData.Concatenate());
            response.EnsureSuccessStatusCode();
            var result = await response.Content.ReadAsStringAsync();
            return result;
        }


    }
}
