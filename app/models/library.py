from .db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Library(db.Model):
    __tablename__ = 'libraries'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, ForeignKey("users.id"), nullable=False)
    gameId = db.Column(db.Integer, ForeignKey("games.id"), nullable=False)
    status = db.Column(db.String(255), nullable=False)

    game = relationship("Game", back_populates="libraries")
    user = relationship("User", back_populates="libraries")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'gameId': self.gameId,
            'status': self.status,
            'cover': self.game.cover_url,
            'title': self.game.title
        }
