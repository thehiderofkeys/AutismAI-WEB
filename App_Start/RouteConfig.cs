﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AutismAI_Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "reactApp",
                url: "{*pathInfo}",
                defaults: new { controller = "React", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
