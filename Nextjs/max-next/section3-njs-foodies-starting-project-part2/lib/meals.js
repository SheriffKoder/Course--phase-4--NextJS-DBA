import sql from "better-sqlite3";

// to be able to generate a slug/id based on the title
import slugify from "slugify";

// protect against cross site scripting attacks
// as we are outputting the user meal.instructions string as HTML in the @mealSlug page
import xss from "xss";

import fs from "node:fs";



const db = sql("meals.db");

// fetch meals from the database
// what async does is that it wraps the function into a promise
// even though this code will not return a promise
export async function getMeals () {

    // arbitrary delay simulation
    await new Promise((resolve)=> setTimeout(resolve, 2000));

    // throw new Error("Loading meals failed");
    return db.prepare("SELECT * FROM meals").all();    
    // run() if inserting, all() if fetching, fetching all rows, or get() if fetching a single row
}

export function getMeal(slug) {
    // add dynamic values in statement for security
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}


// save a meal
// store the image file and (data to the database) 
export async function saveMeal (meal) {
    // add a slug property to meal
    meal.slug = slugify(meal.title, {lower:true});

    // sanitize/(remove harmful content) the meal.instructions
    meal.instructions = xss(meal.instructions);

    // get the image extension
    const extension = meal.image.name.split(".").pop();
    // generate file name, can add a random text beside it too for uniqueness
    const fileName = `${meal.slug}.${extension}`;

    // write data to a certain file
    // requires a path to the file you are writing
    // returns a stream object which you can use to write to that path
    const stream = fs.createWriteStream(`public/images/${fileName}`)

    // convert the image to a buffer to be used as a chunk
    // arrayBuffer will give a promise, so use await
    const bufferedImage = await meal.image.arrayBuffer();

    // write to the stream or write the image to a file
    // write needs a regular buffer not an array buffer so will use Buffer.from
    // arguments (the thing want to write, function executes once done writing)
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) throw new Error("Saving image failed!");
    });

    // store the overall data in the database
    // using the newly created path for the new file
    // remove the /public as all front-end requests will use the public folder by default
    meal.image = `/images/${fileName}`;

    // save to the database
    // insert some data into the meals table
    // insert data in the following fields title, summary.. 
    // as we defined when creating in dp.prepare in @initdb.js
    // we can inject values directly in the VALUES,
    // but will use place holders to avoid scripting attacks
    // like ?,?,?.. etc or @slug, @title etc. which is supported by sql lite
    // target specific fields by their name and then later pass an object
    // to the run function which will allow using the property names
    // for the object being passed to extract those values for the fields
    // make sure to write in a matching order
    db.prepare(`
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES(
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )
    `).run(meal);

}