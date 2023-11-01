FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app

# Copy project sln file
COPY *.sln .

# Copy all csproj files in our project
COPY ./*/*.csproj ./
RUN for file in $(ls *.csproj); do mkdir -p ./${file%.*}/ && mv $file ./${file%.*}/; done

# Restore as distinct layers
RUN dotnet restore *.sln

# Copy remainder of the project files
COPY ./ .

# Build and publish a release
RUN dotnet publish ./MinimalMeet.Api/MinimalMeet.Api.csproj -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0

ENV \
    # Configure web servers to bind to port 8088 when present
    ASPNETCORE_URLS=http://+:8088 \
    # Enable detection of running in a container
    DOTNET_RUNNING_IN_CONTAINER=true

WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "MinimalMeet.Api.dll"]