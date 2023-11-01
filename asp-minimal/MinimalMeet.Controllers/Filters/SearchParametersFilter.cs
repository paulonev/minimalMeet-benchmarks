using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using MinimalMeet.Core.Constants;
using MinimalMeet.Core.Entities.Search;

namespace MinimalMeet.Controllers.Filters;

public class SearchParametersFilter : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        if (context.ActionArguments.TryGetValue("query", out var q) && q is FindQuery query)
        {
            if (query == null || string.IsNullOrEmpty(query.Title) && query.FromBeginDate == null)
            {
                var errorMessage = string.Format(AppConstants.INVALID_SEARCH_PARAMETERS, nameof(FindQuery.Title), nameof(FindQuery.FromBeginDate));
                context.Result = new BadRequestObjectResult(errorMessage);
            }
        }
    }
}
