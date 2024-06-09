"use server"

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

  // handle form submit
  // object received from the form containing information
  const shareMeal = async (formData) => {
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
    }

    // console.log(meal);
    await saveMeal(meal);
    
    redirect("/meals");

    
  
  }

  export default shareMeal;