//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TursArg.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class PUBLICACIONES
    {
        public int idPublicacion { get; set; }
        public Nullable<System.DateTime> fechaPublicacion { get; set; }
        public string texto { get; set; }
        public Nullable<int> idUserPublicacion { get; set; }
        public Nullable<int> idTema_publicacion { get; set; }
    
        public virtual USUARIOS USUARIOS { get; set; }
        public virtual TEMAS_DE_FORO TEMAS_DE_FORO { get; set; }
    }
}
