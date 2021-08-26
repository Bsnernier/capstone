from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    demo = Review(
        userId=2,
        gameId=1,
        text='Great Game',
        rating=5)
    risk = Review(
        userId=1,
        gameId=2,
        text='Okay Game',
        rating=3)
    wich = Review(
        userId=1,
        gameId=1,
        text='Bad Game',
        rating=1)

    db.session.add(demo)
    db.session.add(risk)
    db.session.add(wich)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
