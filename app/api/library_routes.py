from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Library, User

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
    print("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL", library[0].status)
    return {'library': [game.to_library() for game in library]}
