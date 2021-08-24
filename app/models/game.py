from .db import db


class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(70), nullable=False, unique=True)
    genre = db.Column(db.String(20), nullable=False)
    cover_url = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    summary = db.Column(db.String(255), nullable=False)
