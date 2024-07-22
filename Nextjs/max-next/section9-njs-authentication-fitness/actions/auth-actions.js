"use server"

import { createUser } from "@/lib/user";
import { hashUserPassword } from "@/util/hash";
import { redirect } from "next/navigation";

export async function signup (prevState,formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    // validate data
    let errors = {};
    
    if (!email.includes("@")) {
        errors.email = "Please enter a valid email address.";
    }

    if (password.trim().length < 8 ) {
        errors.password = "Password must be at least 8 characters long."
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors: errors      // or just errors, because they have the same name
        }
    }

    const hashedPassword = hashUserPassword(password);

    // catch errors thrown back from the db when creating a user
    try {
        // store these in the database (create a new user)
        createUser(email, hashedPassword);
    } catch (error) {
        // this email already exists error
        if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
            return {
                errors: {email: "It seems like an account for the chosen email already exists"}
            }
        }
        // for other errors
        throw error;
    }

    // if creation is successful, redirect
    redirect("/training");
}