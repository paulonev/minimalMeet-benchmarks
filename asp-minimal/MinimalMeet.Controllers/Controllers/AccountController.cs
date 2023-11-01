using Microsoft.AspNetCore.Mvc;
using MinimalMeet.Core.Interfaces;

namespace MinimalMeet.Controllers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AccountController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpGet("login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Login([FromQuery] string username)
        {
            await _authService.SignInAsync(username);
            return Ok();
        }
    }
}
