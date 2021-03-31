mod data_structures;

use self::data_structures::*;

/// Base trait for objects that are on the map
pub trait Entity {
    /// Return the owner, or None if it's not owned
    fn get_owner(&self) -> Option<usize>;
    /// Returns the UID for the object
    fn get_id(&self) -> usize;
    /// Current position of the entity on the map
    fn get_position() -> Vector2;
}