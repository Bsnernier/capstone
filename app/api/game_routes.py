from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Game

game_routes = Blueprint('games', __name__)


@game_routes.route('/')
@login_required
def games():
    games = Game.query.all()
    test = {'games': [game.to_dict() for game in games]}
    print(test)
    return test
