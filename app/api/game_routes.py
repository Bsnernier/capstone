from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Game, Review

game_routes = Blueprint('games', __name__)


@game_routes.route('/')
@login_required
def get_games():
    games = Game.query.all()
    return {'games': [game.to_dict() for game in games]}

@game_routes.route('/<int:id>')
@login_required
def get_one_game(id):
    game = Game.query.get(id)
    print('here it tis.......................',game.to_dict())
    return {game.id: game.to_dict()}

@game_routes.route('/<int:id>/reviews')
@login_required
def get_reviews(id):
    reviews = Review.query.get(id)
    print('here it tis.......................',reviews.to_dict())
    return {reviews.id: reviews.to_dict()}
