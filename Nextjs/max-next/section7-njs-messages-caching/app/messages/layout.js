import { getMessages } from "@/lib/messages";
import { revalidatePath } from "next/cache";

export default async function MessagesLayout({ children }) {

  // fetch data from an api
  // const response = await fetch('http://localhost:8080/messages', {
  //   headers: {
  //     'X-ID': 'layout',
  //   },
  // });
  // const messages = await response.json();

  const messages = await getMessages();  // reaching out for data locally
  // await for unstable_cache
  revalidatePath("/messages");
  

  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}