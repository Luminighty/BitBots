use rocket::response::content::{Json};

#[get("/")]
fn find_all() -> Json<String> {
    Json(format!("{{ {:?} }}", vec![0,1,2,3]))
}

#[get("/<id>")]
fn find(id: u32) -> Json<String> {
    Json(format!("{{ \"id\": {} }}", id))
}

#[post("/")]
fn create() -> Option<String> {
    None
}

#[post("/<id>/instruction")]
fn instr(id: u32) -> Option<String> {
    None
}


pub fn bot_routes() -> std::vec::Vec<rocket::Route> {
    routes![find_all, find, create, instr]
}