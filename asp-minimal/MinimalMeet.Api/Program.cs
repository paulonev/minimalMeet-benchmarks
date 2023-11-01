using MinimalMeet.Core.Configuration;
using MinimalMeet.Core.DAL;
using MinimalMeet.Api;

using Microsoft.OpenApi.Models;
using MinimalMeet.Core.Interfaces;
using MinimalMeet.Core.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<DatabaseOptions>(builder.Configuration.GetSection(nameof(DatabaseOptions)));
builder.Services.AddScoped<IMeetingRepository, MeetingRepository>();
builder.Services.AddScoped<IAuthService, AuthService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(setup => setup.SwaggerDoc("v1", new OpenApiInfo()
{
    Description = "Meetings catalog implementation using Minimal Api",
    Title = "MinimalMeet",
    Version = "v1",
}));
builder.Services.AddScoped<IMeetingRepository, MeetingRepository>();
builder.Services.AddDbContext<AppDbContext>(
    options => options.UseNpgsql(builder.Configuration.GetSection("Database").Get<DatabaseOptions>().ConnectionString, b => b.MigrationsAssembly("MinimalMeet.Api")));

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(o =>
    {
        o.Events.OnRedirectToLogin = context =>
        {
            context.Response.StatusCode = StatusCodes.Status401Unauthorized;
            return Task.CompletedTask;
        };
    });

builder.Services.AddHttpContextAccessor();
builder.Services.AddAuthorization();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseExceptionHandler(exceptionHandlerApp =>
    exceptionHandlerApp.Run(async context =>
    {
        var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
        if (contextFeature != null)
        {
            if (contextFeature.Error is BadHttpRequestException error)
            {
                await Results.Problem(statusCode: error.StatusCode, title: error.Message, detail: error.InnerException?.Message).ExecuteAsync(context);
            }
        }
    })
);

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.UseMeetingsEndpoints();

app.Run();
