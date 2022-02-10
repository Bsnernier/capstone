from .db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, ForeignKey("users.id"), nullable=False)
    gameId = db.Column(db.Integer, ForeignKey("games.id"), nullable=False)
    text = db.Column(db.String(1000), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime(timezone=True), default=func.now())

    game = relationship("Game", back_populates="reviews")
    user = relationship("User", back_populates="reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'gameId': self.gameId,
            'text': self.text,
            'rating': self.rating,
            'username': self.user.username,
            'date': self.date
        }
