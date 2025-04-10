import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/user.model";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "inlinecart-next" });

// save user to db (inngest)

export const syncUserCreate = inngest.createFunction(
  {
    id: "sync-user-from-clerk",
  },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;
    const userData = {
      _id: id,
      firstName: first_name + " " + last_name,
      email: email_addresses[0].email_address,
      image: image_url,
    };
    await connectDB();
    await User.create(userData);
  }
);

// inngest function to update user in db

export const syncUserUpdate = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;
    const userData = {
      _id: id,
      firstName: first_name + " " + last_name,
      email: email_addresses[0].email_address,
      image: image_url,
    };
    await connectDB();
    const user = await User.findById({ id, userData });
  }
);

// inngest function to delete user from db

export const syncUserDelete = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    await connectDB();
    await User.findByIdAndDelete(id);
  }
);
