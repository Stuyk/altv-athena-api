# Athena Framework - REST API

This feeds data from the Server to anyone who would like to access the endpoint. It's a relatively simple plugin that is more data centric.

It is highly recommended that if you plan on using this plugin that you limit who can access the port `9090` by IP.

**You as the end-user are responsible for securing data.**

# GET

`:variable` means you provide the data to get the result. Everything is case sensitive.

_\* Some sensitive data removed from response._ 

## Account Specific

| Request                            | Description | Response     |
| ---------------------------------- | ----------- | ------------ |
| `localhost:9090/accounts/:discord` | Get Account | `<Account>`* |

## Player Specific

| Request                                   | Description                  | Response            |
| ----------------------------------------- | ---------------------------- | ------------------- |
| `localhost:9090/players/all`              | Get Players                  | `Array<alt.Player>` |
| `localhost:9090/players/name/:name`       | Get Character by Name        | `Character`         |
| `localhost:9090/players/discord/:discord` | Get Characters by Discord ID | `Array<Character>`  |

## Vehicle Specific

| Request                                 | Description            | Response             |
| --------------------------------------- | ---------------------- | -------------------- |
| `localhost:9090/vehicles/all`           | Get Vehicles           | `Array<alt.Vehicle>` |
| `localhost:9090/vehicles/character/:id` | Get Character Vehicles | `Array<IVehicle>`    |

All `GET` Requests Return a JSON Response Object

```ts
{
    "version": number,
    "data": Array<SomeObjectType>
}
```

# Installation

- Clone the latest version of the archiv, alternatively you can create a Fork or install this plugin as a git submodule
  
* Fastify dependencie will be auto installed through the Athena Framework 

### Drag and Drop
- Recommend for everyone
```ts
git clone https://github.com/Stuyk/altv-athena-api
```

### Git Submodule (Terminal)
- In src/core/plugins/
- Recommend for experienced users
```ts
git submodule add https://github.com/Stuyk/altv-athena-api 
```

# Verification of Installation

![](https://i.imgur.com/Tqa77vQ.png)

Open Browser and Visit

```
localhost:9090
```

# Uninstallation

Delete the folder `src/core/plugins/altv-athena-api`

Run the following in a Terminal:

```
npm uninstall fastify
```
