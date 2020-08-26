using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Data;
using MySql.Data.MySqlClient;


namespace AutismAI_Web.Database
{
    public class DbContext
    {
        public DbContext() {
          

        }

        public void OpenAndCloseConnection() {
            string connectionString = ConfigurationManager.ConnectionStrings["SQLDbConnection"].ToString();

            MySqlConnection cnn = new MySqlConnection(connectionString);
            try
            {
                cnn.Open();
                Debug.WriteLine("Connection Opened ! ");
                cnn.Close();
                Debug.WriteLine("Connection Closed ! ");
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Connection error ! ");
            }
        }

        public void GetAll() {

        }
    }
}