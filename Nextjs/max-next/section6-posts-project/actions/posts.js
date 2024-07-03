"use server"    // here if defined in a separate folder


import { uploadImage } from '@/lib/cloudinary';
import { storePost, updatePostLikeStatus } from '@/lib/posts';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

//// function used to grab data from the form, upload image to cloudinary and submit to the sql-lite or return an error message to be used by useFormState
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

    // upload the image to cloudinary, expect an url string
    // wrap with try/catch in case this async process failed
    let imageUrl;
    try {
        imageUrl = await uploadImage(image);
    } catch (error) {
        throw new Error("Image upload failed, post was not created. Please try again later.")
    }

    await storePost({
      imageUrl: imageUrl,
      title,
      content,
      userId: 1
    })

    redirect("/feed");
  }


//
  export async function togglePostLikeStatus (postId) {
    // we hard coded the user creating the post to be with id=1
    // and the user liking/un-liking the post to be with id=2
    await updatePostLikeStatus(postId, 2);
    // as next.js caches the ui, we tell it to re-validate or re-fresh the ui of these pages
    revalidatePath("/", "layout");
  }