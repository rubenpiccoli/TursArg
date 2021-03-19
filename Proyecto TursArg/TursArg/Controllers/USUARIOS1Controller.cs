using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TursArg.Controllers;
using TursArg.Models;

namespace TursArg.Controllers
{
    public class USUARIOS1Controller : Controller
    {
        BDTursArgEntities1 bd = new BDTursArgEntities1();
        // GET: USUARIOS1
        public ActionResult Index()
        {
            List<USUARIOS> listaUsuarios = bd.USUARIOS.ToList();
            return View(listaUsuarios);
        }
        // Registrar usaruarios hice el action de tipo get porque no me andaba el mismo metodo pero solo
        // Post, asi que lo sobrecargue.
        public ActionResult registrarUsuario()
        {

            return View();
        }
        [HttpPost]
        public ActionResult registrarUsuario(USUARIOS usuario)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            usuario.rolAdmin = false;
            bd.USUARIOS.Add(usuario);
            bd.SaveChanges();
            return RedirectToAction("Index");
        }



    }
}