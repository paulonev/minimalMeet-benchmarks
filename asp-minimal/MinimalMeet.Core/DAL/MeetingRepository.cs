using Microsoft.Extensions.Options;

using MinimalMeet.Core.Entities;
using MinimalMeet.Core.Configuration;
using MinimalMeet.Core.Entities.Search;
using Microsoft.EntityFrameworkCore;
using MinimalMeet.Core.Constants;

namespace MinimalMeet.Core.DAL;

public class MeetingRepository : IMeetingRepository
{
    public AppDbContext DbContext { get; set; }

    public MeetingRepository(AppDbContext appDbContext)
    {
        DbContext = appDbContext;
    }

    public void EnsureCreated()
    {
        DbContext.Database.EnsureCreated();
    }

    public async Task<List<Meeting>> GetAllAsync(int? limit)
    {
        try
        {
            var meetings = limit.HasValue 
                ? await DbContext.Meetings.OrderBy(m => m.BeginAt).Take(limit.Value).ToListAsync()
                : await DbContext.Meetings.ToListAsync();

            if (meetings is null)
            {
                throw new Exception("Meetings undefined");
            }

            return meetings;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception, message: {ex.Message}, trace: \n{ex.StackTrace}");
            throw;
        }
    }

    public async Task<Meeting?> GetByIdAsync(int id)
    {
        try
        {
            return await DbContext.Meetings.Where(m => m.Id == id).FirstOrDefaultAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception, message: {ex.Message}, trace: \n{ex.StackTrace}");
            throw;
        }
    }

    public async Task<int> CreateAsync(CreateMeetingDto meeting)
    {
        try
        {
            var entry = await DbContext.Meetings.AddAsync(new()
            {
                Description = meeting.Description,
                BeginAt = meeting.BeginAt,
                Location = meeting.Location,
                Title = meeting.Title,
            });

            await DbContext.SaveChangesAsync();

            return entry.Entity.Id;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception, message: {ex.Message}, trace: \n{ex.StackTrace}");
            throw;
        }
    }

    public async Task<bool> DeleteAsync(int id)
    {
        try
        {
            var meeting = await DbContext.Meetings.Where(m => m.Id == id).FirstOrDefaultAsync();
            if (meeting == null) 
            {
                return false;
            }

            DbContext.Meetings.Remove(meeting);

            await DbContext.SaveChangesAsync();

            return true;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception, message: {ex.Message}, trace: \n{ex.StackTrace}");
            throw;
        }
    }

    public async Task<int> UpdateAsync(int id, UpdateMeetingDto updateMeeting)
    {
        try
        {
            var meeting = await DbContext.Meetings.Where(m => m.Id == id).FirstOrDefaultAsync();
            if (meeting == null) 
            {
                return 0;
            }

            meeting.Title = updateMeeting.Title;
            meeting.Description = updateMeeting.Description;
            meeting.Location = updateMeeting.Location;
            meeting.BeginAt = updateMeeting.BeginAt;

            DbContext.Meetings.Update(meeting);
            await DbContext.SaveChangesAsync();
            
            return 1;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception, message: {ex.Message}, trace: \n{ex.StackTrace}");
            throw;
        }
    }

    public async Task<List<Meeting>?> FindAsync(FindQuery query)
    {
        try
        {
            List<string> specifications = new();
            if (!string.IsNullOrEmpty(query.Title))
            {
                specifications.Add($"\"Title\" LIKE {query.Title}");
            }
            if (query.FromBeginDate != null)
            {
                specifications.Add($"\"BeginAt\" >= {query.FromBeginDate}");
            }

            if (specifications.Count == 0)
            {
                var errorMessage = string.Format(AppConstants.INVALID_SEARCH_PARAMETERS, nameof(FindQuery.Title), nameof(FindQuery.FromBeginDate));
                throw new ArgumentException(errorMessage);
            }

            var sql = $"SELECT * FROM \"Meetings\" WHERE {string.Join("AND", specifications)};";

            return await DbContext.Meetings.FromSqlRaw(sql).ToListAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception, message: {ex.Message}, trace: \n{ex.StackTrace}");
            throw;
        }
    }
}
