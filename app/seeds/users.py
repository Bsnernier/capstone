from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    geralt = User(
        username='geralt', email='geralt@aa.io', password='password')
    raz = User(
        username='raz', email='raz@aa.io', password='password')
    link = User(
        username='link', email='link@aa.io', password='password')
    jesse = User(
        username='jesse', email='jesse@aa.io', password='password')
    thor = User(
        username='thor', email='thor@aa.io', password='password')
    engineer = User(
        username='engineer', email='engineer@aa.io', password='password')
    doomguy = User(
        username='doomguy', email='doomguy@aa.io', password='password')
    abigail = User(
        username='abigail', email='abigail@aa.io', password='password')
    bardin = User(
        username='bardin', email='bardin@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(geralt)
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
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
