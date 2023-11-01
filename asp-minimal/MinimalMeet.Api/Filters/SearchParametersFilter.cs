using MinimalMeet.Core.Constants;
using MinimalMeet.Core.Entities.Search;

namespace MinimalMeet.Api.Filters;

public class SearchParametersFilter : IEndpointFilter
{
    public async ValueTask<object> InvokeAsync(EndpointFilterInvocationContext context, EndpointFilterDelegate next)
    {
        var query = context.GetArgument<FindQuery>(0);
        if (query == null || string.IsNullOrEmpty(query.Title) && query.FromBeginDate == null)
        {
            var errorMessage = string.Format(AppConstants.INVALID_SEARCH_PARAMETERS, nameof(FindQuery.Title), nameof(FindQuery.FromBeginDate));
            return Results.BadRequest(errorMessage);
        }

        return await next(context);
    }
}
