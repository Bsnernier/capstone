from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Review
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@review_routes.route('/game/<int:id>')
@login_required
def get_reviews(id):
    reviews = Review.query.filter_by(gameId=id).all()
    return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/game/<int:id>', methods=['POST'])
@login_required
def create_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
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
