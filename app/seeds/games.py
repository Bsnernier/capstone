from app.models import db, Game


# Adds a demo user, you can add other users here if you want
def seed_games():
    demo = Game(
        title='The Demo Game',
        genre=12,
        cover_url='https://images.igdb.com/igdb/image/upload/t_thumb/co1wyy.jpg',
        description='This is the description of The Demo Game',
        summary='This is the summary of The Demo Game')

    db.session.add(demo)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()
