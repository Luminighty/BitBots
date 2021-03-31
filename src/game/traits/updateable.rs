/// Base trait used for objects that should be updated in every tick
pub trait Updateable {
    /// Code that will run when the game registers this object
    fn init(&mut self);
    /// Code that runs every tick
    fn update(&mut self);
}