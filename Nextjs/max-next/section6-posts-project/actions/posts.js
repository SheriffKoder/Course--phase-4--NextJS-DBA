"use server"    // here if defined in a separate folder


import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';

    // by using useFormState in the form component, we have to put a first argument of prevState before formData
  // prevState allows using the default state of useFormState so we can return a state based on it..
  export async function createPost(prevState, formData) {
    // "use server"; // required to use form actions in next.js // here if this component is used inside a component
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    // console.log(title, image, content);

    // create an errors array if inputs are not valid
    // return if there are errors so useFormState can use it
    let errors = [];
    if (!title || title.trim().length === 0) {
      errors.push("Title is required.");
    }
    if (!content || content.trim().length === 0) {
      errors.push("Content is required.");
    }
    if (!image || image.size === 0) {
      errors.push("Image is required.");
    }
    if (errors.length > 0) {
      return {errors};
    }

    await storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    })

    redirect("/feed");
  }