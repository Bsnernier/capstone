from app.models import db, Game


# Adds a demo user, you can add other users here if you want
def seed_games():
    demo = Game(
        igdbId=1942,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
        first_release_date=1431993600,
        genre="Role-playing (RPG),Adventure",
        title='The Demo Game',
        platforms="PC,PS4,Xbox One,Nintendo Switch",
        storyline="The Witcher 3: Wild Hunt concludes the story of the witcher Geralt of Rivia, the series' protagonist, whose story to date has been covered in the previous installments.",
        summary='RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms.',)
    risk = Game(
        igdbId=28512,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/co2eu7.jpg',
        first_release_date=1553731200,
        genre="Shooter,Indie",
        title='Risk of Rain 2',
        platforms="PC,PS4,Xbox One,Nintendo Switch,Google Stadia",
        storyline="Risk of Rain 2 follows the crew of UES : Safe Travels as they try to find UES : Contact Light and any survivors along their path.",
        summary="The classic multiplayer roguelike, Risk of Rain, returns with an extra dimension and more challenging action.")

    db.session.add(demo)
    db.session.add(risk)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()
