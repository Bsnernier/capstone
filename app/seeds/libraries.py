from app.models import db, Library


# Adds a demo user, you can add other users here if you want
def seed_libraries():
    demo = Library(
        userId=1,
        gameId=1,
        status='100% Completed'
        )
    psycho = Library(
        userId=1,
        gameId=3,
        status='Beat the Game'
        )
    osrs = Library(
        userId=1,
        gameId=16,
        status='Started'
        )
    doom = Library(
        userId=1,
        gameId=18,
        status='Just Purchased'
        )
    guild = Library(
        userId=1,
        gameId=19,
        status='Halfway Through'
        )

    db.session.add(demo)
    db.session.add(psycho)
    db.session.add(osrs)
    db.session.add(doom)
    db.session.add(guild)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_libraries():
    db.session.execute('TRUNCATE libraries RESTART IDENTITY CASCADE;')
    db.session.commit()
