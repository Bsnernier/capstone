from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Review

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/game/<int:id>')
@login_required
def get_reviews(id):
    reviews = Review.query.get(id)
    print('here it tis.......................',reviews.to_dict())
    return {reviews.id: reviews.to_dict()}
