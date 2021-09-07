from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    demo = Review(
        userId=2,
        gameId=2,
        text='Very hard game that is just too hard for a casual gamer like me to enjoy',
        rating=1)
    risk = Review(
        userId=3,
        gameId=1,
        text='Best game that I have ever played!',
        rating=5)
    wich = Review(
        userId=4,
        gameId=1,
        text='Good',
        rating=5)
    raz = Review(
        userId=5,
        gameId=3,
        text='I was so excited they brought me back for a sequel after so much time!',
        rating=5)
    link = Review(
        userId=6,
        gameId=6,
        text='I beat the game with a stick and a pot lid.',
        rating=5)
    jesse = Review(
        userId=7,
        gameId=5,
        text="The song you're looking for is 'Take Control' by Old Gods of Asgard. You're welcome.",
        rating=5)
    thor = Review(
        userId=8,
        gameId=4,
        text="I have slayed many a beast from these lands and have truly built my forever home.",
        rating=5)
    engineer = Review(
        userId=9,
        gameId=2,
        text='Needs more fungus',
        rating=5)
    doomguy = Review(
        userId=10,
        gameId=18,
        text='Okay. Could have more demon killings.',
        rating=3)
    abigail = Review(
        userId=11,
        gameId=8,
        text='Okay. Could have more demon killings.',
        rating=3)
    bardin = Review(
        userId=12,
        gameId=7,
        text="Let's get the rest done, dawri. These stairs go up!",
        rating=5)

    db.session.add(demo)
    db.session.add(risk)
    db.session.add(wich)
    db.session.add(raz)
    db.session.add(link)
    db.session.add(jesse)
    db.session.add(thor)
    db.session.add(engineer)
    db.session.add(doomguy)
    db.session.add(abigail)
    db.session.add(bardin)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
