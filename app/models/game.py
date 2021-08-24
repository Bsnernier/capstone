from .db import db
from sqlalchemy.orm import relationship
from .review import Review
from .library import Library

class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(70), nullable=False, unique=True)
    genre = db.Column(db.String(20), nullable=False)
    cover_url = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    summary = db.Column(db.String(255), nullable=False)

    reviews = relationship("Review", order_by=Review.id, back_populates="game", uselist=False)
    libraries = relationship("Library", order_by=Library.id, back_populates="game", uselist=False)
