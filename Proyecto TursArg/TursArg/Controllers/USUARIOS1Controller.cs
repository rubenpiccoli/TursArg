using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Web.Http;
using System.Web.Http.Description;
using TursArg.Models;
using TursArg.Models.Respuesta;

namespace TursArg.Controllers
{
    public class USUARIOS1Controller : ApiController
    {
        private BDTursArgEntities db = new BDTursArgEntities();

        // GET: api/USUARIOS1
        public IQueryable<USUARIOS> GetUSUARIOS()
        {
           // db.Configuration.ProxyCreationEnabled = false;
            return db.USUARIOS;
        }

        // GET: api/USUARIOS1/5
        [ResponseType(typeof(USUARIOS))]
        public IHttpActionResult GetUSUARIOS(int id)
        {
            USUARIOS uSUARIOS = db.USUARIOS.Find(id);
            if (uSUARIOS == null)
            {
                return NotFound();
            }

            return Ok(uSUARIOS);
        }

        // GET: api/USUARIOS1/5
        [ResponseType(typeof(USUARIOS))]
        public IHttpActionResult GetEmail(string email)
        {

            var uSUARIOS = from c in db.USUARIOS
                           where (c.email == (email))
                           select c;
            if (uSUARIOS == null)
            {
                return NotFound();
            }

            return Ok(uSUARIOS);
        }
        // GET: api/USUARIOS1/5
        [ResponseType(typeof(USUARIOS))]
        public IHttpActionResult GetUSUARIOS(string Token)
        {

            var uSUARIOS = db.USUARIOS.Where(a => a.Token == Token);


            if (uSUARIOS == null)
            {
                return NotFound();
            }

            return Ok(uSUARIOS);
        }

        // PUT: api/USUARIOS1/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUSUARIOS(int id, USUARIOS uSUARIOS)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != uSUARIOS.idUsuario)
            {
                return BadRequest();
            }
            

            db.Entry(uSUARIOS).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USUARIOSExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/USUARIOS1

        //Registrar usuarios
        [ResponseType(typeof(USUARIOS))]
        public IHttpActionResult PostUSUARIOS(USUARIOS uSUARIOS)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Encripta contraseña
            var Encript = uSUARIOS.contrasenia;
            uSUARIOS.contrasenia = Encriptacion.Encriptacion.GetSHA256(Encript);

            // verificar usuarios

            uSUARIOS.rolAdmin = false;
            db.USUARIOS.Add(uSUARIOS);
            db.SaveChanges();
            

            

            return CreatedAtRoute("DefaultApi", new { id = uSUARIOS.idUsuario }, uSUARIOS);
        }

        // Login o autenticación de usuario
        [HttpPost]
        [Route("api/USUARIOS1/login")]
        public Respuesta AutenticarUsuario(USUARIOS val)
        {
            Respuesta oRespuesta = new Respuesta();

            // encripta la passw ingresada por el usuario para revisar si coincide con la password encriptada anteriormente
            string oValPass = Encriptacion.Encriptacion.GetSHA256(val.contrasenia);
            val.contrasenia = oValPass;

            try
            {
                var usuarioRegistrado = db.USUARIOS.Where(a => a.email == val.email && a.contrasenia == val.contrasenia).ToList();

                var usuarioAdmin = usuarioRegistrado[0].rolAdmin;
                if (usuarioRegistrado.Count > 0)
                {
                    if (usuarioAdmin == true)
                    {
                        oRespuesta.Resultado = 3;
                        oRespuesta.Mensaje = "Login correcto";
                    }
                    else
                    {
                        oRespuesta.Resultado = 1;
                        oRespuesta.Mensaje = "Login correcto";
                    }
                    
                    ///// genera el Token ////
                    oRespuesta.Datos = Guid.NewGuid().ToString();

                    USUARIOS uSUARIOS = usuarioRegistrado.FirstOrDefault();
                    uSUARIOS.Token = oRespuesta.Datos.ToString();
                    ///graba la modifcacion(confirma) el Token///
                    db.Entry(uSUARIOS).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
                else
                {
                    oRespuesta.Resultado = 0;
                    oRespuesta.Mensaje = "Ocurrió un error";
                }
                return oRespuesta;
            }
            catch (Exception ex)
            {

                oRespuesta.Mensaje = "Ocurrió un error. Intente más tarde." + ex.Message;
                return oRespuesta;
            }



        }

        // DELETE: api/USUARIOS1/5
        [ResponseType(typeof(USUARIOS))]
        public IHttpActionResult DeleteUSUARIOS(int id)
        {
            USUARIOS uSUARIOS = db.USUARIOS.Find(id);
            if (uSUARIOS == null)
            {
                return NotFound();
            }

            db.USUARIOS.Remove(uSUARIOS);
            db.SaveChanges();

            return Ok(uSUARIOS);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USUARIOSExists(int id)
        {
            return db.USUARIOS.Count(e => e.idUsuario == id) > 0;
        }
    }
}


