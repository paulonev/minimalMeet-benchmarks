using System.ComponentModel.DataAnnotations;

namespace MinimalMeet.Core.Entities;

public class CreateMeetingDto
{
    [Required] public string Title { get; set; }
    public string Description { get; set; } = string.Empty;
    public DateTime BeginAt { get; set; } = DateTime.Now;
    public string Location { get; set; } = string.Empty;
}
