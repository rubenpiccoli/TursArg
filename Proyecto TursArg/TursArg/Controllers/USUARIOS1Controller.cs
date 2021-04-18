using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TursArg.Models;
using TursArg.Models.Respuesta;

namespace TursArg.Controllers
{
    public class USUARIOS1Controller : ApiController
    {
        private BDTursArgEntities db = new BDTursArgEntities();
        private int id;

        // GET: api/USUARIOS1
        public IQueryable<USUARIOS> GetUSUARIOS()
        {
            return db.USUARIOS;
        }

        [HttpGet]
        [Route ("api/USUARIOS1/Saludar")]
        public Respuesta Saludar()
        {
            Respuesta oRespuesta = new Respuesta();
            oRespuesta.Mensaje = "Hola Mundo";
            oRespuesta.Resultado = 1;

            return (oRespuesta);
        }

        [HttpPost]
        [Route("api/USUARIOS1/Login")]
        public Respuesta Login(USUARIOS oLogin)
        {
            Respuesta oRespuesta = new Respuesta();

            

            using (BDTursArgEntities db = new BDTursArgEntities()) 
            {
                var lista = db.USUARIOS.Where(a => a.email == oLogin.email && a.contrasenia == oLogin.contrasenia).ToList();

                if (lista.Count() > 0) 
                {
                    oRespuesta.Resultado = 1;
                    oRespuesta.Mensaje = "login correcto";
                    ///// genera el Token ////
                    oRespuesta.Datos = Guid.NewGuid().ToString();

                    USUARIOS uSUARIOS = lista.FirstOrDefault();
                    uSUARIOS.Token = oRespuesta.Datos.ToString();
                    ///graba la modifcacion(confirma) el Token///
                    db.Entry(uSUARIOS).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                } else
                {
                    oRespuesta.Mensaje = "login Incorrecto";
                    oRespuesta.Resultado = 0;
                }
            }
            
            return (oRespuesta);
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
        [ResponseType(typeof(USUARIOS))]
        public IHttpActionResult PostUSUARIOS(USUARIOS uSUARIOS)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            uSUARIOS.rolAdmin = false;
            db.USUARIOS.Add(uSUARIOS);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = uSUARIOS.idUsuario }, uSUARIOS);
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