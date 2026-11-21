import { model, models, Schema, Types } from "mongoose";
import Event from "./event.model";

interface BookingDocument {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema = new Schema<BookingDocument>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
  },
  { timestamps: true },
);

bookingSchema.index({ eventId: 1 });

bookingSchema.pre("save", async function () {
  // Ensure bookings cannot reference events that do not exist.
  const event = await Event.exists({ _id: this.eventId });
  if (!event) {
    throw new Error("Cannot create booking: referenced event does not exist.");
  }
});

const Booking =
  models.Booking ?? model<BookingDocument>("Booking", bookingSchema);

export default Booking;
