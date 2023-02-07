using Microsoft.AspNetCore.Mvc;
using Mission04_norty144.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_norty144.controllers
{
    public class blahController : Controller
    {
        public IActionResult Index()
        {

            return View();
        }


        [HttpGet]
        public IActionResult calculator()
        {

            return View();
        }

        //this is the second instance of the calculator so it hsa the GradeCalculatorModel and holds the inputs from the user
        [HttpPost]
        public IActionResult calculator(GradeCalculatorModel model)
        {

            return View();
        }

    }
}
