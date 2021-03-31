#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
use rocket::response::content;

#[get("/")]
fn index() -> content::Json<&'static str> {
    content::Json("{ \"hi\": \"world\" }")
}

mod routes;
mod game;

fn main() {
    rocket::ignite()
    .mount("/",    routes![index])
    .mount("/bot", routes::bot_routes())
    .launch();
}