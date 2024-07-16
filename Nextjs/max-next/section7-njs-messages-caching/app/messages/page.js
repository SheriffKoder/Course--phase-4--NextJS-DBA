import { unstable_noStore } from "next/cache"
import Messages from '@/components/messages';
import { getMessages } from "@/lib/messages";

export default async function MessagesPage() {

  // fetch data from an api
  // // unstable_noStore();
  // const response = await fetch('http://localhost:8080/messages', {
  //   // next: {
  //   //   revalidate: 5
  //   // },
  //   next: {tags: ['msg']}, //array of strings, many tags to multiple requests, allows to use the tag name in the component to avoid cache
  //   headers: {
  //     'X-ID': 'page',
  //   },
  // });
  // const messages = await response.json();

  const messages = await getMessages();  // reaching out for data locally
  // await for unstable_cache

  
  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
