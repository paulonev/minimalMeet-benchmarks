namespace MinimalMeet.Core.Entities;

public class UpdateMeetingDto
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public DateTime BeginAt { get; set; } = DateTime.UtcNow;
    public string Location { get; set; } = string.Empty;
}
