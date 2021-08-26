from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    text = StringField('text', validators=[DataRequired()])
    rating = SelectField('rating', choices=['',1,2,3,4,5], validators=[DataRequired()])
