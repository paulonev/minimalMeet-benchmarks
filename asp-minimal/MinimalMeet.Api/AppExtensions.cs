using Microsoft.AspNetCore.Http.HttpResults;

using MinimalMeet.Core.DAL;
using MinimalMeet.Core.Entities.Search;
using MinimalMeet.Core.Entities;
using MinimalMeet.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using MinimalMeet.Api.Constants;
using MinimalMeet.Api.Filters;

namespace MinimalMeet.Api;

public static class AppExtensions
{
    public static void UseMeetingsEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/minimal-api");
        var meetingsGroup = group.MapGroup($"/{GroupNames.Meetings}")
                            .RequireAuthorization()
                            .WithTags(GroupNames.Meetings);

        var accountGroup = group.MapGroup($"/{GroupNames.Account}").WithTags(GroupNames.Account);

        /// Create new meeting
        meetingsGroup.MapPost("/",
            async (IMeetingRepository dal, [FromBody] CreateMeetingDto createMeeting, HttpRequest request) =>
            {
                var id = await dal.CreateAsync(createMeeting);
                return Results.CreatedAtRoute("GetSingle", new { id });
            })
            .Produces(StatusCodes.Status201Created)
            .Produces(StatusCodes.Status401Unauthorized)
            .ProducesProblem(StatusCodes.Status500InternalServerError)
            .AllowAnonymous()
            .WithName("Create");

        /// Get all meetings
        meetingsGroup.MapGet("/",
            async (int? limit, IMeetingRepository dal) =>
            {
                var meetings = await dal.GetAllAsync(limit);

                return TypedResults.Ok(meetings);
            })
            .AllowAnonymous()
            .Produces(StatusCodes.Status200OK)
            .WithName("GetAll");

        /// Get meeting by Id
        meetingsGroup.MapGet("/{id}",
            async Task<Results<NotFound, Ok<Meeting>>> (int id, IMeetingRepository dal) =>
            {
                var result = await dal.GetByIdAsync(id);

                if (result == null)
                {
                    return TypedResults.NotFound();
                }

                return TypedResults.Ok(result);
            })
            .Produces(StatusCodes.Status200OK)
            .Produces(StatusCodes.Status401Unauthorized)
            .Produces(StatusCodes.Status500InternalServerError)
            .WithName("GetSingle");

        /// Delete the meeting
        meetingsGroup.MapDelete("/{id}",
            async (int id, IMeetingRepository dal) =>
            {
                var result = await dal.GetByIdAsync(id);

                if (result == null)
                {
                    return Results.NotFound();
                }

                await dal.DeleteAsync(id);

                return Results.NoContent();
            })
            .Produces(StatusCodes.Status204NoContent)
            .Produces(StatusCodes.Status401Unauthorized)
            .Produces(StatusCodes.Status404NotFound)
            .Produces(StatusCodes.Status500InternalServerError)
            .WithName("Delete");

        /// Update the meeting
        meetingsGroup.MapPut("/{id}",
            async (int id, UpdateMeetingDto updateMeeting, IMeetingRepository dal) =>
            {
                var result = await dal.GetByIdAsync(id);

                if (result == null)
                {
                    return Results.NotFound();
                }

                await dal.UpdateAsync(id, updateMeeting);

                return Results.NoContent();
            })
            .Produces(StatusCodes.Status204NoContent)
            .Produces(StatusCodes.Status401Unauthorized)
            .Produces(StatusCodes.Status404NotFound)
            .Produces(StatusCodes.Status500InternalServerError)
            .WithName("Update");

        /// Search meeting by title or date
        meetingsGroup.MapGet("/search",
            async ([AsParameters] FindQuery findQuery, IMeetingRepository dal) =>
            {
                var meetings = await dal.FindAsync(findQuery);

                if (meetings.Count == 0)
                {
                    return Results.NotFound();
                }

                return Results.Ok(meetings);
            })
            .AddEndpointFilter<SearchParametersFilter>()
            .Produces(StatusCodes.Status200OK)
            .Produces(StatusCodes.Status400BadRequest)
            .Produces(StatusCodes.Status401Unauthorized)
            .Produces(StatusCodes.Status404NotFound)
            .Produces(StatusCodes.Status500InternalServerError)
            .WithName("Search");

        meetingsGroup.MapPost("/seed",
            async (int? count, AppDbContext ctx) =>
            {
                await DbSeeder.Seed(ctx, count ?? 1000);

                return "Successfully Seeded";
            })
            .Produces(StatusCodes.Status200OK)
            .Produces(StatusCodes.Status500InternalServerError)
            .AllowAnonymous();

        accountGroup.MapGet("/login",
            async ([FromQuery(Name = "username")] string username, IAuthService authService) =>
            {
                await authService.SignInAsync(username);

                return Results.Ok();
            })
            .Produces(StatusCodes.Status200OK)
            .WithName("Login");
    }
}
