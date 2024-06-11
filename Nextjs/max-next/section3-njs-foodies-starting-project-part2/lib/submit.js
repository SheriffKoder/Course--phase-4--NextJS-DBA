"use server"

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

  // handle form submit
  // object received from the form containing information
  // useFormState state will pass another parameter before formData to shareMeal
  const shareMeal = async (prevState, formData) => {
    // async + "use server" + action attribute on the form element
    // creates a server action, guarantee that this function executes on the server side
    // "use server" // not used as it is defined at top of the file

    const meal = {
      // access input values by their names in jsx
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };

    // input validation
    function isInvalidText (text) {
        return !text || text.trim() === "";
    }

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes("@") ||
        !meal.image || meal.image.size === 0
    ) {
        // throw new Error ("Invalid Input");
        return {
            message: "Invalid input."
        }
    }

    // console.log(meal);
    await saveMeal(meal);
    // revalidate the cache for /meals and layout (which includes also nested pages will view the new meal) 
    // to avoid using the previous cached data even after update on the webpage in production/build mode
    revalidatePath("/meals", "layout"); 
    redirect("/meals");

    
  
  }

  export default shareMeal;