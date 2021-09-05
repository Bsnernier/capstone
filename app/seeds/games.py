from app.models import db, Game


# Adds a demo user, you can add other users here if you want
def seed_games():
    demo = Game(
        igdbId=1942,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
        first_release_date=1431993600,
        genre="Role-playing (RPG),Adventure",
        title='The Witcher 3: Wild Hunt',
        platforms="PC,PlayStation 4,Xbox One,Nintendo Switch",
        storyline="The Witcher 3: Wild Hunt concludes the story of the witcher Geralt of Rivia, the series' protagonist, whose story to date has been covered in the previous installments. Geralt's new mission comes in dark times as the mysterious and otherworldly army known as the Wild Hunt invades the Northern Kingdoms, leaving only blood soaked earth and fiery ruin in its wake; and it seems the Witcher is the key to stopping their cataclysmic rampage.",
        summary='RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.',)
    risk = Game(
        igdbId=28512,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/co2eu7.jpg',
        first_release_date=1553731200,
        genre="Shooter,Indie",
        title='Risk of Rain 2',
        platforms="PC,PlayStation 4,Xbox One,Nintendo Switch,Google Stadia",
        storyline="Risk of Rain 2 follows the crew of UES : Safe Travels as they try to find UES : Contact Light and any survivors along their path. They have to try and survive the hostile wildlife and environment as difficulty increases over time, navigating Petrichor V via the teleporters strewn across the entire planet. The crew loop endlessly through many distinct environments, but end upon the moon to defeat the final boss.",
        summary="The classic multiplayer roguelike, Risk of Rain, returns with an extra dimension and more challenging action. No run will ever be the same with randomized stages, enemies, bosses, and items. Play solo, or team up with up to four friends to fight your way through hordes of monsters, unlock new loot, and find a way to escape the planet.\n\nWith each run, you’ll learn the patterns of your foes, and even the longest odds can be overcome with enough skill. A unique scaling system means both you and your foes limitlessly increase in power over the course of a game–what once was a bossfight will in time become a common enemy.\n\nMyriad survivors, items, enemies, and bosses return to Risk 2, and many new ones are joining the fight. Brand new survivors like the Artificer and MUL-T debut alongside classic survivors such as the Engineer, Huntress, and–of course–the Commando. With over 75 items to unlock and exploit, each run will keep you cleverly strategizing your way out of sticky situations.")
    psycho = Game(
        igdbId=14741,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/co1sod.jpg',
        first_release_date=1629763200,
        genre="Platform,Adventure",
        title='Psychonauts 2',
        platforms="PC,PlayStation 4,Xbox One,Xbox Series X|S",
        storyline="Razputin Aquato, trained acrobat and powerful young psychic, has realized his life long dream of joining the international psychic espionage organization known as the Psychonauts! But these psychic super spies are in trouble. Their leader hasn't been the same since he was kidnapped, and what's worse, there's a mole hiding in headquarters. Raz must use his powers to stop the mole before they execute their secret plan--to bring the murderous psychic villain, Maligula, back from the dead!",
        summary="Psychonauts 2 is a mind-bending trip through the strange worlds hiding inside our brains. Freshly-minted special agent and acrobat extraordinaire Razputin “Raz” Aquato returns to unpack emotional baggage and expand mental horizons. Along the way he’ll help new friends, like this magical mote of light voiced (and sung) by Jack Black. Raz must use his powers to unravel dark mysteries about the Psychonauts team and his own family origins.")
    viking = Game(
        igdbId=104967,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/co2x61.jpg',
        first_release_date=1612224000,
        genre="Role-playing (RPG),Adventure,Indie",
        title='Valheim',
        platforms="Linux,PC",
        storyline="A battle-slain warrior, the Valkyries have ferried your soul to Valheim, the tenth Norse world. Besieged by creatures of chaos and ancient enemies of the gods, you are the newest custodian of the primordial purgatory, tasked with slaying Odin’s ancient rivals and bringing order to Valheim.",
        summary="Valheim is a game about exploring a huge fantasy world inspired by Norse mythology and Viking culture. The world itself is procedurally generated and random seeds can be generated or set manually. You start your adventure at the relatively peaceful center of Valheim. The further from the center you travel, the more challenging the world becomes. But you will also find more valuable materials that you can use to craft deadlier weapons and sturdier armor. You will also build your own Viking fortress and outposts all over the world. Eventually, you will build mighty longships and sail the great oceans in search of exotic lands… but be wary of sailing too far.")
    control = Game(
        igdbId=103329,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/co2evj.jpg',
        first_release_date=1566864000,
        genre="Shooter,Adventure",
        title='Control',
        platforms="PC,PlayStation 4,Xbox One,Google Stadia",
        storyline="After a secretive agency in New York is invaded by an otherworldly threat, you become the new Director struggling to regain Control.\n\nControl is Jesse Faden’s story and her personal search for answers as she grows into the role of the Director. The world of Control has its own story, as do the allies Jesse meets along the way. Jesse works with other Bureau agents and discovers strange experiments and secrets.",
        summary="Control is a supernatural 3rd person action-adventure will challenge you to master the combination of supernatural abilities, modifiable loadouts and reactive environments while fighting through a deep and unpredictable world.")
    breath = Game(
        igdbId=7346,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg',
        first_release_date=1488499200,
        genre="Role-playing (RPG),Adventure",
        title='The Legend of Zelda: Breath of the Wild',
        platforms="Wii U,Nintendo Switch",
        storyline="Link awakes in a mysterious chamber after 100 years of slumber to find that Calamity Ganon has taken over Hyrule Castle and left Hyrule to decay and be taken over by nature.",
        summary="In this 3D open-world entry in the Zelda series, Link is awakened from a deep slumber without his past memories in the post-apocalyptic Kingdom of Hyrule, and sets off on a journey to defeat the ancient evil Calamity Ganon. Link treks, climbs and glides through fields, forests and mountain ranges while meeting and helping friendly folk and defeating enemies in order to gather up the strength to face Ganon.")
    vermin = Game(
        igdbId=55189,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/co20u8.jpg',
        first_release_date=1520467200,
        genre="Shooter,Adventure,Indie",
        title="Warhammer: Vermintide 2",
        platforms="PC,PlayStation 4,Xbox One",
        storyline="The game is set in the Warhammer Fantasy universe during the early days of the End Times. The game follows the Heroes of Ubersreik from the first game against the Skaven hordes of Clan Fester and their new allies, the Rotbloods. The expansion, 'Winds of Magic', also introduced the Beastmen, a herd of Chaos mutated humanoids, in search of an object known as the 'Herdstone'",
        summary="Warhammer: Vermintide 2 is the sequel to the critically acclaimed Vermintide. It’s time for players to return to the memorable first-person co-op experience with intense world class melee action.")
    valley = Game(
        igdbId=17000,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/xrpmydnu9rpxvxfjkiu7.jpg',
        first_release_date=1456444800,
        genre="Role-playing (RPG),Simulator,Indie",
        title="Stardew Valley",
        platforms="Linux,PC,Mac,Android,iOS,PlayStation Vita,PlayStation 4,Xbox One,Nintendo Switch",
        storyline="You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!",
        summary="Stardew Valley is an open-ended country-life RPG! You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!")
    wich1 = Game(
        igdbId=80,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/co1xrx.jpg',
        first_release_date=1193356800,
        genre="Role-playing (RPG)",
        title="The Witcher",
        platforms="PC,Mac",
        storyline="The game begins when Geralt of Rivia, one of a few remaining \"witchers\" – traveling monster hunters for hire, gifted with unnatural powers, is transported to the witcher stronghold of Kaer Morhen by fellow witchers who had discovered him unconscious in a field. Geralt remembers almost nothing of his life before that point. He is taken to Kaer Morhen, the base of the witchers, where he meets a sorceress named Triss Merigold. The castle is attacked by a gang of bandits named Salamandra, led by a criminal known as the Professor, a mage named Savolla who controls a large, praying mantis-like monster, and another mage named Azar Javed. The witchers and the sorceress manage to slay the monster and kill Savolla, but the Professor and Azar manage to escape with the mutagens that genetically alter the witchers. After curing Triss of the wounds she received while fighting Javed, Geralt and the rest of the witchers head off in different directions in order to find information on Salamandra.",
        summary="Based on the novel series by Andrzej Sapkowski, The Witcher follows Geralt of Rivia, an amnesiac witcher (problem solver and slayer of monsters) whose home, the Kaer Morhen citadel, is besieged by an organization called the Salamandra, who steal their valuable potions and get away. Throughout the game, Geralt must resolve people's moral dilemmas, connect the dots of his past and track down the Salamandra.")
    gwent = Game(
        igdbId=19474,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/co1u2v.jpg',
        first_release_date=1540252800,
        genre="Strategy,Card & Board Game",
        title="Gwent: The Witcher Card Game",
        platforms="PC,Android,iOS,Playstation 4,Xbox One",
        storyline="GWENT is a competitive card game developed by CD PROJEKT RED — creators of The Witcher 3: Wild Hunt. In GWENT, gamers clash with friends in fast-paced duels that combine skill-based play with bluffing, and careful deck construction. The game is played over a best-of-three series of rounds, as players unleash their hand by slinging spells and diverse units with special abilities, and use clever tricks to deceive their opponents.",
        summary="Join in The Witcher universe’s favorite card game! In GWENT, you clash with your friends in fast-paced duels that combine bluffing, on-the-fly decision making and careful deck construction. Play your cards right and manage a two-row battle formation as you unleash your hand over a best-of-three series of rounds. With heroes, spells and special abilities that dramatically turn the tide of battle, deception and clever tricks will be necessary parts of your arsenal.")
    wich2 = Game(
        igdbId=478,
        cover_url='https://images.igdb.com/igdb/image/upload/t_cover_big/co1wy4.jpg',
        first_release_date=1305590400,
        genre="Role-playing (RPG),Adventure",
        title="The Witcher 2: Assassins of Kings",
        platforms="Linux,PC,Xbox 360, Mac",
        storyline="The player is Geralt of Rivia, a professional monster slayer, a witcher. Entangled in the political turmoil that engulfed Temeria, Geralt helped quell the rebellion of the Order of the Flaming Rose. Soon after, he saved King Foltest’s life when the monarch was attacked by a witcher-like assassin. He continues to protect the king, serving as his bodyguard as Foltest strives to bring peace to his kingdom. The Order’s last bastions have yielded to the royal army, yet one more task remains - the Baroness La Valette announced her secession from the realm, and her fortress must be taken. A month after the attempted assassination, Foltest’s armies stand at the gates of La Valette Castle, preparing for a final assault. Still at Foltest’s side, Geralt is among them, unable to begin his personal quest to discover the mysterious assassin’s origin and identity.",
        summary="This third-person dark fantasy Western RPG and sequel to The Witcher (2007), featuring multiple endings and branching narrative paths, follows the travels of Geralt of Rivia, witcher, who, after being falsely accused of regicide, sets out to clear his name and find the real killer, in a time of political turmoil and the brink of war between the imperialistic Nilfgaardian Empire and the Four Kingdoms.")

    db.session.add(demo)
    db.session.add(risk)
    db.session.add(psycho)
    db.session.add(viking)
    db.session.add(control)
    db.session.add(breath)
    db.session.add(vermin)
    db.session.add(valley)
    db.session.add(wich1)
    db.session.add(gwent)
    db.session.add(wich2)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()
