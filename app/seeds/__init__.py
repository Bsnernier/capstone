from flask.cli import AppGroup
from .users import seed_users, undo_users
from .games import seed_games, undo_games
from .libraries import seed_libraries, undo_libraries
from .reviews import seed_reviews, undo_reviews

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_games()
    seed_libraries()
    seed_reviews()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_games()
    undo_libraries()
    undo_reviews()
    # Add other undo functions here
