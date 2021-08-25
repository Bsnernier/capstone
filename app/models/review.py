from .db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, ForeignKey("users.id"), nullable=False)
    gameId = db.Column(db.Integer, ForeignKey("games.id"), nullable=False)
    text = db.Column(db.String(255), nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    game = relationship("Game", back_populates="reviews")
    user = relationship("User", back_populates="reviews")
