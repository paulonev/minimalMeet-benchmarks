using MinimalMeet.Core.Entities;
using MinimalMeet.Core.Entities.Search;

namespace MinimalMeet.Core.DAL;

public interface IMeetingRepository
{
    Task<List<Meeting>> GetAllAsync(int? limit);

    Task<Meeting?> GetByIdAsync(int id);

    Task<int> CreateAsync(CreateMeetingDto createMeeting);

    Task<bool> DeleteAsync(int id);

    Task<int> UpdateAsync(int id, UpdateMeetingDto updateMeeting);

    Task<List<Meeting>?> FindAsync(FindQuery query);
}
