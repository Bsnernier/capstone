from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Game

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
    return {game.id: game.to_dict()}
