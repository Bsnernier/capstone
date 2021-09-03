from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Review, User
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages


@review_routes.route('/game/<int:id>')
@login_required
def get_reviews(id):
    reviews = Review.query.filter_by(gameId=id).order_by(Review.id.desc()).all()
    return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/game/<int:id>', methods=['POST'])
@login_required
def create_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    dupeReview = Review.query.filter_by(gameId=id, userId=current_user.id).all()
    if (dupeReview):
        return {'errors': ["You have already submitted a review for this game"]}, 401
    if form.validate_on_submit():
        review = Review(
            userId=current_user.id,
            gameId=id,
            text=form.data['text'],
            rating=form.data['rating']
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@review_routes.route('/game/<int:id>/edit', methods=["POST"])
@login_required
def update_review(id):
    reviewId = request.form['reviewId']
    text = request.form['text']
    rating = request.form['rating']

    review = Review.query.get(reviewId)
    review.text = text
    review.rating = rating
    db.session.commit()
    return {"Successful": "Update!"}


@review_routes.route('/game/<int:id>/delete', methods=["POST"])
@login_required
def delete_review(id):
    reviewId = request.form['reviewId']
    review = Review.query.get(reviewId)

    db.session.delete(review)
    db.session.commit()
    return {"Successful": "Delete!"}
