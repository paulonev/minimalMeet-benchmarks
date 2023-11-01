namespace MinimalMeet.Core.Interfaces;

public interface IAuthService
{
    Task SignInAsync(string username);
}
