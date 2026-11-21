import { model, models, Schema } from "mongoose";

interface EventDocument {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

function createSlug(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeDate(value: string): string {
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (dateOnly) {
    const [, year, month, day] = dateOnly;
    const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
    if (
      date.getUTCFullYear() !== Number(year) ||
      date.getUTCMonth() !== Number(month) - 1 ||
      date.getUTCDate() !== Number(day)
    ) {
      throw new Error("Event date must be a valid date.");
    }
    return date.toISOString().slice(0, 10);
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error("Event date must be a valid date.");
  }
  return date.toISOString().slice(0, 10);
}

function normalizeTime(value: string): string {
  const match = /^(\d{1,2}):([0-5]\d)(?::[0-5]\d)?\s*(AM|PM)?$/i.exec(value);
  if (!match) {
    throw new Error("Event time must be a valid 24-hour or 12-hour time.");
  }

  let hour = Number(match[1]);
  const meridiem = match[3]?.toUpperCase();
  if (meridiem) {
    if (hour < 1 || hour > 12) {
      throw new Error("Event time must be a valid 24-hour or 12-hour time.");
    }
    hour = (hour % 12) + (meridiem === "PM" ? 12 : 0);
  } else if (hour > 23) {
    throw new Error("Event time must be a valid 24-hour or 12-hour time.");
  }

  return `${String(hour).padStart(2, "0")}:${match[2]}`;
}

const eventSchema = new Schema<EventDocument>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, trim: true },
    description: { type: String, required: true, trim: true },
    overview: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    venue: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    time: { type: String, required: true, trim: true },
    mode: { type: String, required: true, trim: true },
    audience: { type: String, required: true, trim: true },
    agenda: {
      type: [String],
      required: true,
      default: undefined,
      validate: {
        validator: (items: string[]) =>
          items.length > 0 && items.every((item) => item.trim().length > 0),
        message: "Event agenda must contain at least one non-empty item.",
      },
    },
    organizer: { type: String, required: true, trim: true },
    tags: {
      type: [String],
      required: true,
      default: undefined,
      validate: {
        validator: (items: string[]) =>
          items.length > 0 && items.every((item) => item.trim().length > 0),
        message: "Event tags must contain at least one non-empty item.",
      },
    },
  },
  { timestamps: true },
);

eventSchema.index({ slug: 1 }, { unique: true });

eventSchema.pre("save", function () {
  // Regenerate the URL slug only for new events or when their title changes.
  if (this.isNew || this.isModified("title")) {
    const slug = createSlug(this.title);
    if (!slug) {
      throw new Error("Event title must contain characters usable in a URL slug.");
    }
    this.slug = slug;
  }

  // Store dates as ISO calendar dates and times as 24-hour HH:mm values.
  this.date = normalizeDate(this.date);
  this.time = normalizeTime(this.time);
});

const Event =
  models.Event ?? model<EventDocument>("Event", eventSchema);

export default Event;
