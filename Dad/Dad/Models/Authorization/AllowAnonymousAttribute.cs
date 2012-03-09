using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dad.Models.Authorization
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    public sealed class AllowAnonymousAttribute : Attribute
    {
    }
}