# IGDB API Routes

## Headers Needed

```bash
  Client-ID: qif3ezy9uuvwf2is53jryemsl4iz9j
  Authorization: Bearer j0ax3e9tct68pinyg07ep2al7yy0t3
```

## Get Game By Id

### Input

```bash
{
  method: POST,
  url: https://api.igdb.com/v4/games/,
  body: {
    fields cover, first_release_date, genres, name, platforms, storyline, summary;
    where id = 1942
    }
  # this will return certain fields for the game with id of 1942
  # to get all fields simply use *
}
```

### Ouput

```bash
[
    {
        "id": 1942,
        "cover": 89386,
        "first_release_date": 1431993600,
        "genres": [
            12,
            31
        ],
        "name": "The Witcher 3: Wild Hunt",
        "platforms": [
            6,
            48,
            49,
            130
        ],
        "storyline": "The Witcher 3: Wild Hunt concludes the story of the witcher Geralt of Rivia, the series' protagonist, whose story to date has been covered in the previous installments. Geralt's new mission comes in dark times as the mysterious and otherworldly army known as the Wild Hunt invades the Northern Kingdoms, leaving only blood soaked earth and fiery ruin in its wake; and it seems the Witcher is the key to stopping their cataclysmic rampage.",
        "summary": "RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing."
    }
]
```

## Get Cover By Id

### Input

```bash
{
  method: POST,
  url: https://api.igdb.com/v4/covers/,
  body: {
    fields *;
    where id = 89386;
    }
  # this will return all fields for the cover with id of 89386
}
```

### Ouput

```bash
[
    {
        "id": 89386,
        "alpha_channel": false,
        "animated": false,
        "game": 1942,
        "height": 1559,
        "image_id": "co1wyy",
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1wyy.jpg",
        "width": 1170,
        "checksum": "603ae7ce-f061-4f14-7f9c-7b8708fb3268"
    }
]
```

## Get Genre By Id

### Input

```bash
{
  method: POST,
  url: https://api.igdb.com/v4/genres,
  body: {
    fields *;
    where id = 12;
    }
  # this will return all fields for the genre with id of 12
}
```

### Ouput

```bash
[
    {
        "id": 12,
        "created_at": 1297555200,
        "name": "Role-playing (RPG)",
        "slug": "role-playing-rpg",
        "updated_at": 1323216000,
        "url": "https://www.igdb.com/genres/role-playing-rpg",
        "checksum": "42dea3b2-7fe2-e734-91cd-f80ce62a14c3"
    }
]
```

## Get Platform By Id

### Input

```bash
{
  method: POST,
  url: https://api.igdb.com/v4/platform_versions,
  body: {
    fields *;
    where id = 6;
    }
  # this will return all fields for the platform with id of 6
}
```

### Ouput

```bash
[
    {
        "id": 6,
        "companies": [
            74
        ],
        "name": "Playstation 3 Super Slim",
        "platform_logo": 79,
        "platform_version_release_dates": [
            161,
            162,
            163,
            164
        ],
        "slug": "playstation-3-super-slim",
        "summary": "In September 2012, Sony announced that a new slimmer PS3 redesign (CECH-4000) was due to be released in late 2012 and that it would be available with either a 250 GB or 500 GB hard drive. In PAL regions, the 250 GB model is not available; a model with 12 GB of flash memory is available in its place. A standalone 250 GB hard drive is available to upgrade this model. Both are roughly 25% smaller and about 20% lighter than the original PS3 Slim. This version has a sliding disc cover rather than the slot-loading drive found on previous PlayStation 3 consoles. A vertical stand is also available for these models and was launched on the same day as the consoles in their respective regions.",
        "url": "https://www.igdb.com/platforms/ps3/version/playstation-3-super-slim",
        "checksum": "50fa2235-a2d7-ac43-3931-bf6e083c69e7"
    }
]
```
