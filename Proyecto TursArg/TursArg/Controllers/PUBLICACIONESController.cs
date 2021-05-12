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
    public class PUBLICACIONESController : ApiController
    {
        private BDTursArgEntities db = new BDTursArgEntities();

        // GET: api/PUBLICACIONES
        public IQueryable<PUBLICACIONES> GetPUBLICACIONES()
        {
          return db.PUBLICACIONES;
        }

        // GET: api/PUBLICACIONES/5
        [ResponseType(typeof(PUBLICACIONES))]
        public IHttpActionResult GetPUBLICACIONES(int id)
        {
            PUBLICACIONES pUBLICACIONES = db.PUBLICACIONES.Find(id);
            if (pUBLICACIONES == null)
            {
                return NotFound();
            }

            return Ok(pUBLICACIONES);
        }

        ////// busca todas las publicaciones de idTema////
        // GET: api/PUBLICACIONES/5
        [ResponseType(typeof(PUBLICACIONES))]
        public IHttpActionResult GetPUBLICACIONESTEMA(int idTEMA)
        {
            var pUBLICACIONES = db.PUBLICACIONES.Where(a => a.idTema_publicacion == idTEMA);
            if (pUBLICACIONES == null)
            {
                return NotFound();
            }

            return Ok(pUBLICACIONES);
        }

        // PUT: api/PUBLICACIONES/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPUBLICACIONES(int id, PUBLICACIONES pUBLICACIONES)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pUBLICACIONES.idPublicacion)
            {
                return BadRequest();
            }

            db.Entry(pUBLICACIONES).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PUBLICACIONESExists(id))
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

        // POST: api/PUBLICACIONES
        [ResponseType(typeof(PUBLICACIONES))]
        public IHttpActionResult PostPUBLICACIONES(PUBLICACIONES pUBLICACIONES)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            ////coloca la fecha del dia ///
            pUBLICACIONES.fechaPublicacion = DateTime.Now;
            db.PUBLICACIONES.Add(pUBLICACIONES);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = pUBLICACIONES.idPublicacion }, pUBLICACIONES);
        }

        // DELETE: api/PUBLICACIONES/5
        [ResponseType(typeof(PUBLICACIONES))]
        public IHttpActionResult DeletePUBLICACIONES(int id)
        {
            PUBLICACIONES pUBLICACIONES = db.PUBLICACIONES.Find(id);
            if (pUBLICACIONES == null)
            {
                return NotFound();
            }

            db.PUBLICACIONES.Remove(pUBLICACIONES);
            db.SaveChanges();

            return Ok(pUBLICACIONES);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PUBLICACIONESExists(int id)
        {
            return db.PUBLICACIONES.Count(e => e.idPublicacion == id) > 0;
        }
    }
}