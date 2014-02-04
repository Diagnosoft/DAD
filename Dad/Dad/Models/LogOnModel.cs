using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Dad.Models
{
    public class LogOnModel
    {
        [Required]
        [Display(Name = "Username")]
        [RegularExpression(@"(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})+$", ErrorMessage = "Incorrect Username.  Your username is your email address.")]
        public string Username { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        [RegularExpression(@"(^[A-Za-z0-9]\w{6,}[A-Za-z0-9])+$", ErrorMessage = "Your password can only contain letters and numbers.")]
        public string Password { get; set; }

    }
}