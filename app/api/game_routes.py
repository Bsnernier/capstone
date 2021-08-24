from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Game

game_routes = Blueprint('games', __name__)


@game_routes.route('/')
@login_required
def games():
    return 'Hello'
