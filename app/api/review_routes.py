from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Review

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/game/<int:id>')
@login_required
def get_reviews(id):
    reviews = Review.query.filter_by(gameId=id).all()
    return {'reviews': [review.to_dict() for review in reviews]}
