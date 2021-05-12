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
    public class CONSULTAS_VIAEMAILController : ApiController
    {
        private BDTursArgEntities db = new BDTursArgEntities();

        // GET: api/CONSULTAS_VIAEMAIL
        public IQueryable<CONSULTAS_VIAEMAIL> GetCONSULTAS_VIAEMAIL()
        {
            return db.CONSULTAS_VIAEMAIL;
        }

        // GET: api/CONSULTAS_VIAEMAIL/5
        [ResponseType(typeof(CONSULTAS_VIAEMAIL))]
        public IHttpActionResult GetCONSULTAS_VIAEMAIL(int id)
        {
            CONSULTAS_VIAEMAIL cONSULTAS_VIAEMAIL = db.CONSULTAS_VIAEMAIL.Find(id);
            if (cONSULTAS_VIAEMAIL == null)
            {
                return NotFound();
            }

            return Ok(cONSULTAS_VIAEMAIL);
        }

        // PUT: api/CONSULTAS_VIAEMAIL/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCONSULTAS_VIAEMAIL(int id, CONSULTAS_VIAEMAIL cONSULTAS_VIAEMAIL)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cONSULTAS_VIAEMAIL.idConsulta)
            {
                return BadRequest();
            }

            db.Entry(cONSULTAS_VIAEMAIL).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CONSULTAS_VIAEMAILExists(id))
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

        // POST: api/CONSULTAS_VIAEMAIL
        [ResponseType(typeof(CONSULTAS_VIAEMAIL))]
        public IHttpActionResult PostCONSULTAS_VIAEMAIL(CONSULTAS_VIAEMAIL cONSULTAS_VIAEMAIL)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CONSULTAS_VIAEMAIL.Add(cONSULTAS_VIAEMAIL);
            db.SaveChanges();
            

            return CreatedAtRoute("DefaultApi", new { id = cONSULTAS_VIAEMAIL.idConsulta }, cONSULTAS_VIAEMAIL);
        }

        // DELETE: api/CONSULTAS_VIAEMAIL/5
        [ResponseType(typeof(CONSULTAS_VIAEMAIL))]
        public IHttpActionResult DeleteCONSULTAS_VIAEMAIL(int id)
        {
            CONSULTAS_VIAEMAIL cONSULTAS_VIAEMAIL = db.CONSULTAS_VIAEMAIL.Find(id);
            if (cONSULTAS_VIAEMAIL == null)
            {
                return NotFound();
            }

            db.CONSULTAS_VIAEMAIL.Remove(cONSULTAS_VIAEMAIL);
            db.SaveChanges();

            return Ok(cONSULTAS_VIAEMAIL);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CONSULTAS_VIAEMAILExists(int id)
        {
            return db.CONSULTAS_VIAEMAIL.Count(e => e.idConsulta == id) > 0;
        }
    }
}