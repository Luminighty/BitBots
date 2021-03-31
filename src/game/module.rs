pub enum Module {
    Generic(GenericModule),
    Bot(BotModule),
    Wall(WallModule),
}

pub enum GenericModule {
    Armor,
    Speed,
}

pub enum BotModule {
    Storage,
    Mining,
    Repair,
    Weapon
}

pub enum WallModule {
    Turret,
    Range
}