using System.Web;
using System.Web.Optimization;

namespace TursArg
{
    public class BundleConfig
    {
        // Para obtener más información sobre las uniones, visite https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new Bundle("~/Script/Bundles").Include("~/Bundles/inline.*",
                "~/Bundles/polyfills.*",
                "~/Bundles/scripts.*",
                "~/Bundles/runtime.*",
                "~/Bundles/vendor.*",
                "~/Bundles/zone.*",
                "~/Bundles/main.*"));

            bundles.Add(new StyleBundle("~/Content/Styles").Include("~/bundles/styles.*"));




            
        }
    }
}


