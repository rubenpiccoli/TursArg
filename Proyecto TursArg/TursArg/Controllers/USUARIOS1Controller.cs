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

namespace TursArg.Controllers
{
    public class USUARIOS1Controller : ApiController
    {
        private BDTursArgEntities db = new BDTursArgEntities();

        // GET: api/USUARIOS1
        public IQueryable<USUARIOS> GetUSUARIOS()
        {
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