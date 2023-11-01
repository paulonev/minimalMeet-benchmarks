using System.ComponentModel.DataAnnotations;

namespace MinimalMeet.Core.Entities;

public class Meeting
{
    [Required] public int Id { get; set; }
    [Required] public string Title { get; set; }
    public string Description { get; set; } = string.Empty;
    [Required] public DateTime BeginAt { get; set; } = DateTime.Now;
    public string Location { get; set; } = string.Empty;
}
