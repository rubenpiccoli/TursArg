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
    public class TEMASDEFOROController : ApiController
    {
        private BDTursArgEntities db = new BDTursArgEntities();

        // GET: api/TEMASDEFORO
        public IQueryable<TEMAS_DE_FORO> GetTEMAS_DE_FORO()
        {
            return db.TEMAS_DE_FORO;
        }

        // GET: api/TEMASDEFORO/5
        [ResponseType(typeof(TEMAS_DE_FORO))]
        public IHttpActionResult GetTEMAS_DE_FORO(int id)
        {
            TEMAS_DE_FORO tEMAS_DE_FORO = db.TEMAS_DE_FORO.Find(id);
            if (tEMAS_DE_FORO == null)
            {
                return NotFound();
            }

            return Ok(tEMAS_DE_FORO);
        }

        // PUT: api/TEMASDEFORO/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTEMAS_DE_FORO(int id, TEMAS_DE_FORO tEMAS_DE_FORO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tEMAS_DE_FORO.idTema)
            {
                return BadRequest();
            }

            db.Entry(tEMAS_DE_FORO).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TEMAS_DE_FOROExists(id))
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

        // POST: api/TEMASDEFORO
        [ResponseType(typeof(TEMAS_DE_FORO))]
        public IHttpActionResult PostTEMAS_DE_FORO(TEMAS_DE_FORO tEMAS_DE_FORO)
        {
           
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            ////coloca la fecha del dia ///
            tEMAS_DE_FORO.fechaTema = DateTime.Now;
           
            db.TEMAS_DE_FORO.Add(tEMAS_DE_FORO);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tEMAS_DE_FORO.idTema }, tEMAS_DE_FORO);
        }

        // DELETE: api/TEMASDEFORO/5
        [ResponseType(typeof(TEMAS_DE_FORO))]
        public IHttpActionResult DeleteTEMAS_DE_FORO(int id)
        {
            TEMAS_DE_FORO tEMAS_DE_FORO = db.TEMAS_DE_FORO.Find(id);
            if (tEMAS_DE_FORO == null)
            {
                return NotFound();
            }

            db.TEMAS_DE_FORO.Remove(tEMAS_DE_FORO);
            db.SaveChanges();

            return Ok(tEMAS_DE_FORO);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TEMAS_DE_FOROExists(int id)
        {
            return db.TEMAS_DE_FORO.Count(e => e.idTema == id) > 0;
        }
    }
}