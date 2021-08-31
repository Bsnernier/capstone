from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired, ValidationError

def max_length(form, field):
    text = field.data
    if len(text) > 1000:
        raise ValidationError(f"Your review has {len(text)} characters. Please shorten to under 1000")

class ReviewForm(FlaskForm):
    text = StringField('text', validators=[DataRequired(), max_length])
    rating = SelectField('rating', choices=['',1,2,3,4,5], validators=[DataRequired()])
