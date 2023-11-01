FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app

# Copy project sln file
COPY *.sln .

# Copy all csproj files in our project
COPY ./*/*.csproj ./
RUN for file in $(ls *.csproj); do mkdir -p src/${file%.*}/ && mv $file src/${file%.*}/; done

# Restore as distinct layers
RUN dotnet restore *.sln

# Copy remainder of the project files
COPY ./ .

# Build and publish a release
RUN dotnet publish ./MinimalMeet.Api/MinimalMeet.Api.csproj -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "MinimalMeet.Api.dll"]