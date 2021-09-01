from flask_wtf import FlaskForm
from wtforms import SelectField
from wtforms.validators import DataRequired

class LibraryForm(FlaskForm):
    status = SelectField('status', choices=["Just Purchased","Started","Halfway Through","Beat the Game","100% Completed"], validators=[DataRequired()])
