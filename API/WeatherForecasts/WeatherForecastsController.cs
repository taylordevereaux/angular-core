using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using angular_core.API.SampleData.Models;
using Microsoft.AspNetCore.Mvc;

namespace angular_core.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class WeatherForecastsController : Controller
  {
    private static string[] Summaries = new[]
    {
      "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    [HttpGet("[action]")]
    public IEnumerable<WeatherForecastModel> WeatherForecasts()
    {
      // Sleep the thread to simulate loading.
      Thread.Sleep(500);

      var rng = new Random();
      return Enumerable.Range(1, 5).Select(index => new WeatherForecastModel
      {
        DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
        TemperatureC = rng.Next(-20, 55),
        Summary = Summaries[rng.Next(Summaries.Length)]
      });
    }
  }
}
