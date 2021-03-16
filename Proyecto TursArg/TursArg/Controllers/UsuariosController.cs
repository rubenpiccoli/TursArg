using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TursArg.Models;

namespace TursArg.Controllers
{
    public class UsuariosController : Controller
    {
        // creo variable de tipo base de datos con terminación entities
        BDTursArgEntities bd = new BDTursArgEntities();
        // GET: Usuarios
        public ActionResult Index()
        {
            List<Usuarios> listaUsuarios = bd.Usuarios.ToList();
            return View(listaUsuarios);

        }
        // Registrar usaruarios hice el action de tipo get porque no me andaba el mismo metodo pero solo
        // Post, asi que lo sobrecargue.
        public ActionResult registrarUsuario()
        {
            
            return View();
        }
        [HttpPost]
        public ActionResult registrarUsuario(Usuarios usuario)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }

            usuario.rolAdmin = false;
            bd.Usuarios.Add(usuario);
            bd.SaveChanges();
            return RedirectToAction("Index");
            
        }
    }
}