from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Game, Library

game_routes = Blueprint('games', __name__)


@game_routes.route('/')
def get_games():
    games = Game.query.order_by(Game.title.asc()).all()
    return {'games': [game.to_dict() for game in games]}

@game_routes.route('/<int:id>')
@login_required
def get_one_game(id):
    game = Game.query.get(id)
    if game.libraries:
        return {game.id: game.to_library()}
    else: return {game.id: game.to_dict()}
