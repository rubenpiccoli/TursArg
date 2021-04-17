using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TursArg.Models;

namespace TursArg.Controllers
{
    public class BaseController : ApiController
    {
        public bool verificaToken(string token)
        {
            using (BDTursArgEntities db = new BDTursArgEntities())
            {
                if (db.USUARIOS.Where(a => a.Token == token).Count() > 0)
                    return true;
            }
            return false;
        }
    }
}
