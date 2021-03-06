from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Library, User
from app.forms import LibraryForm

library_routes = Blueprint('libraries', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages


@library_routes.route('/users/<int:id>')
@login_required
def get_library(id):
    library = Library.query.filter_by(userId=id).all()
    return {'library': [game.to_dict() for game in library]}


@library_routes.route('/users/<int:id>', methods=['POST'])
@login_required
def add_library(id):
    form = LibraryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        library = Library(
            userId=current_user.id,
            gameId=request.form['gameId'],
            status=request.form['status'],
        )
        db.session.add(library)
        db.session.commit()
        return library.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@library_routes.route('/users/<int:id>/edit', methods=['POST'])
@login_required
def edit_library(id):
    libraryId = request.form['libraryId']
    status = request.form['status']

    library = Library.query.get(libraryId)
    library.status = status
    db.session.commit()

    return library.to_dict()


@library_routes.route('/users/<int:id>/delete', methods=["POST"])
@login_required
def delete_library(id):
    userId = request.form['userId']
    gameId = request.form['gameId']
    library = Library.query.filter_by(userId=userId, gameId=gameId).first()

    db.session.delete(library)
    db.session.commit()
    return {"Successful": "Delete!"}
