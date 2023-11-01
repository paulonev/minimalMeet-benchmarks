using Bogus;
using MinimalMeet.Core.Entities;

namespace MinimalMeet.Core.DAL;

public class DbSeeder
{
    public static async Task Seed(AppDbContext context, int count)
    {
        var meetings = new Faker<Meeting>()
            .RuleFor(m => m.Title, f => f.Lorem.Sentence())
            .RuleFor(m => m.Description, f => f.Lorem.Paragraph(1))
            .RuleFor(m => m.BeginAt, f => {
                var future = f.Date.Future();
                future = future.ToUniversalTime();
                return future;
            })
            .RuleFor(m => m.Location, f => f.Address.StreetAddress())
            .Generate(count);

        context.Meetings.AddRange(meetings);
        await context.SaveChangesAsync();
    }
}
