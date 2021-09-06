from .db import db
from sqlalchemy.orm import relationship
from .review import Review
from .library import Library

class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    igdbId = db.Column(db.Integer, nullable=False)
    cover_url = db.Column(db.String(255), nullable=False)
    first_release_date = db.Column(db.Integer, nullable=False)
    genre = db.Column(db.String(255), nullable=False)
    title = db.Column(db.String(70), nullable=False, unique=True)
    platforms = db.Column(db.String(255), nullable=False)
    storyline = db.Column(db.String(2000), nullable=False)
    summary = db.Column(db.String(2000), nullable=False)

    reviews = relationship("Review", order_by=Review.id, back_populates="game", uselist=False)
    libraries = relationship("Library", order_by=Library.id, back_populates="game", uselist=False)

    def to_dict(self):
        return {
            'id': self.id,
            'igdbId': self.igdbId,
            'cover_url': self.cover_url,
            'first_release_date': self.first_release_date,
            'genre': self.genre,
            'title': self.title,
            'platforms': self.platforms,
            'storyline': self.storyline,
            'summary': self.summary,
        }
