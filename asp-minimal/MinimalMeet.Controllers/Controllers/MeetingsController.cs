using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MinimalMeet.Controllers.Filters;
using MinimalMeet.Core.Constants;
using MinimalMeet.Core.DAL;
using MinimalMeet.Core.Entities;
using MinimalMeet.Core.Entities.Errors;
using MinimalMeet.Core.Entities.Search;

namespace MinimalMeet.Controllers.Controllers;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class MeetingsController : ControllerBase
{
    private readonly IMeetingRepository _meetRepository;

    public MeetingsController(IMeetingRepository meetRepository)
    {
        _meetRepository = meetRepository;
    }

    [HttpGet]
    [AllowAnonymous]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<Meeting>))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<List<Meeting>> GetAsync(int? limit)
    {
        return await _meetRepository.GetAllAsync(limit);
    }

    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Meeting))]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ErrorResponse))]
    public async Task<ActionResult<Meeting>> GetAsync(int id)
    {
        try
        {
            var meeting = await _meetRepository.GetByIdAsync(id);
            if (meeting is null)
            {
                return NotFound();
            }

            return meeting;
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, new ErrorResponse
            {
                Message = AppConstants.SAFE_ERROR_MESSAGE
            });
        }
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ErrorResponse))]
    public async Task<IActionResult> PostAsync([FromBody] CreateMeetingDto meetingDto)
    {
        try
        {
            var id = await _meetRepository.CreateAsync(meetingDto);
            return StatusCode(StatusCodes.Status201Created, new { id });
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, new ErrorResponse
            {
                Message = AppConstants.SAFE_ERROR_MESSAGE
            });
        }
    }

    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ErrorResponse))]
    public async Task<IActionResult> PutAsync(int id, [FromBody] UpdateMeetingDto meetingDto)
    {
        try
        {
            await _meetRepository.UpdateAsync(id, meetingDto);
            return NoContent();
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, new ErrorResponse
            {
                Message = AppConstants.SAFE_ERROR_MESSAGE
            });
        }
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> DeleteAsync(int id)
    {
        var meeting = await _meetRepository.GetByIdAsync(id);
        if (meeting == null)
        {
            return NotFound();
        }

        await _meetRepository.DeleteAsync(id);
        return NoContent();
    }

    [HttpGet("search")]
    [SearchParametersFilter]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<Meeting>))]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ErrorResponse))]
    public async Task<ActionResult<List<Meeting>>> FindAsync([FromQuery] FindQuery query)
    {
        try
        {
            var meetings = await _meetRepository.FindAsync(query);
            if (meetings.Count == 0)
            {
                return NotFound();
            }

            return Ok(meetings);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, new ErrorResponse
            {
                Message = AppConstants.SAFE_ERROR_MESSAGE
            });
        }
    }
}
