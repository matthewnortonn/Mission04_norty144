using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_norty144.models
{
    public class GradeCalculatorModel
    {
        //above each reference to an input there are two forms of validation for the user input. A range validation and making each input required.
        [Required]
        [Range(0, 100, ErrorMessage = "Entry must be between 0 and 100")]
        public float assignments { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Entry must be between 0 and 100")]
        public float group { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Entry must be between 0 and 100")]
        public float quiz { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Entry must be between 0 and 100")]
        public float midterm { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Entry must be between 0 and 100")]
        public float final { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Entry must be between 0 and 100")]
        public float intex { get; set; }
        


    }
}
