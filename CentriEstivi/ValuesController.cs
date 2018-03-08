using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

//using AspNetWebApi.Extensions;
using System.IO;
using System.Net;
using System.Web;
//using System.Web.Http;
using System.Data.SqlClient;
using System.Runtime.Serialization.Json;
using Microsoft.CSharp;
using CentriEstivi.Models;
//using System.Web.Http;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
//using WebApi.Entities;
using Microsoft.AspNetCore.Authorization;
using System.Text;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CentriEstivi
{
  [Authorize]
  [Route("api/[controller]")]
  public class ValuesController : Controller
  {

    private readonly AppSettings _appSettings;

    public ValuesController(
        IOptions<AppSettings> appSettings)
    {
      _appSettings = appSettings.Value;
    }

    [AllowAnonymous]
    [HttpPost]
    [Route("registeruser")]
    public IActionResult RegisterUser([FromBody]Users user)
    {
      try
      {
        // save 
        var id = Dal.RegisterUser(user);
        return Ok();
      }
      catch (Exception ex)
      {
        // return error message if there was an exception
        return BadRequest(ex.Message);
      }
    }

    [AllowAnonymous]
    [HttpPost]
    [Route("authenticateuser")]
    public IActionResult AuthenticateUser([FromBody]Users userDto)
    {
      //var authenticatedUser = Dal.AuthenticateUser(userDto.Email, userDto.Password);
      //return authenticatedUser;
      try
      {
        var user = Dal.AuthenticateUser(userDto.Email, userDto.Password);

        if (user == null)
          return Unauthorized();

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
          Subject = new ClaimsIdentity(new Claim[]
            {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
            }),
          Expires = DateTime.UtcNow.AddDays(7),
          SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        var tokenString = tokenHandler.WriteToken(token);

        // return basic user info (without password) and token to store client side
        return Ok(Dal.mapUser(user, tokenString));
      }
      catch (Exception ex)
      {
        // return error message if there was an exception
        return BadRequest(ex.Message);
      }
    }



    // GET api/values/5
    //[HttpGet("{id}")]
    //public string Get(int id)
    //{
    //  return "value";
    //}

    // POST api/values
    //[HttpPost]
    //public void Post([FromBody]string value)
    //{
    //}

    // PUT api/values/5
    //[HttpPut("{id}")]
    //public void Put(int id, [FromBody]string value)
    //{
    //}

    // DELETE api/values/5
    //[HttpDelete("{id}")]
    //public void Delete(int id)
    //{
    //}
  }
}
