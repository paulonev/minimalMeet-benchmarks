# minimalMeet-benchmarks
2 similar backend APIs written using ASP.NET Core (Minimal API) and Express

## Endpoints 

Common prefix for routes below: `/meetings` (Express) or `/minimal-api/Meetings` (ASP.NET Core)
### GET / - fetch records from the Meetings table

Bindings:
- Query: `limit` (100 by default) - number of records to fetch
- Body: null
- Headers: null

Response Codes:
- `200 OK` if success
- `500 Internal Server Error` if fail

### POST / - insert new record to the Meetings table

Bindings:
- Query: null
- Body: json payload
``{
  Title: "Test",
  Description: "Test",
  BeginAt: "2023-06-11T12:00:00.000Z",
  Location: "Test"
}``
- Headers: null

Response Codes:
- `201 Created` if success
- `500 Internal Server Error` if fail

### GET /{id} - find record from the Meetings table by id

Bindings:
- Path: `id: int`
- Query: null
- Body: null
- Headers: null

Response Codes:
- `200 OK` if success
- `401 Unauthorized` if cookie with sessionId isn't provided (check [/Login]() endpoint documentation)
- `404 Not Found` if item doesn't belong to the table
- `500 Internal Server Error` if fail

### PUT /{id} - partially update record from the Meetings table found by id

Bindings:
- Path: `id: int`
- Query: null
- Body: json payload
``{
  Title: "Test",
  Description: "Test",
  BeginAt: "2023-06-11T12:00:00.000Z",
  Location: "Test"
}``
- Headers: null

Response Codes:
- `204 No Content` if success
- `401 Unauthorized` if cookie with sessionId isn't provided (check [/Login]() endpoint documentation)
- `404 Not Found` if item doesn't belong to the table
- `500 Internal Server Error` if fail

### DELETE /{id} - delete record from the Meetings table found by id

Bindings:
- Path: `id: int`
- Query: null
- Body: null
- Headers: null

Response Codes:
- `204 No Content` if success
- `401 Unauthorized` if cookie with sessionId isn't provided (check [/Login]() endpoint documentation)
- `404 Not Found` if item doesn't belong to the table
- `500 Internal Server Error` if fail

### GET /Account/Login (for ASP.NET Core)

Endpoint used to assign sessionId for the user interacting with the app.

Bindings:
- Query: `username: string` - any arbitrary value

## How to run?

There are 2 ways you can run each app: in the process of your OS or inside 2 docker containers (app container + db container)

## How to run in OS process (ASP.NET Core)

If you want to run ASP.NET Core app in OS process you need to perform the following steps:
1. Make sure you have `postgres` database engine set up and running on your machine on port 5432
2. Go to `appsettings.local.json` file and update `ConnectionString` entry
   
    ``"ConnectionString": "Host=localhost;Username=<username>;Password=<password>;Database=<db>"``
3. Check `ASPNETCORE_ENVIRONMENT` variable in `launchSettings.json`, it should be `local`
4. Start the app using CLI command `dotnet run --project <path-to-csproj>` or Visual Studio window
5. At the app startup ORM will attempt to apply new migrations to the database, wait for 5-10 seconds for them to apply and start making requests to the API.

## How to run in docker (ASP.NET Core)

If you want to run ASP.NET Core app in docker you need to perform the following steps:
1. Make sure you have `Docker Engine` installed on your machine. If you don't - google how to do this.
2. Go to `appsettings.docker.json` file and update `ConnectionString` entry
   
    ``"ConnectionString": "Host=<host>;Username=<username>;Password=<password>;Database=<db>;Maximum Pool Size=<pool_size>"``
   
    You can update value for any key, make sure that `Host` value matches `container_name` for database in `docker-compose` file
3. Build images and start app container and db container by running `docker compose up --build` command
4. After containers have been created and started the ORM will attempt to apply new migrations to the database, wait for 5-10 seconds for them to apply and start making requests to the API.

## How to run in OS process (Express)
TODO: complete

## How to run in docker (Express)
TODO: complete
