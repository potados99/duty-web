import rawSchedules from "../schedules.json";
import {isSameDay} from "date-fns";

export default class Schedule {
  constructor(
    readonly name: string,
    readonly date: Date,
    readonly emoji: string
  ) {}

  private static cache?: Schedule[] = undefined;

  static async getAll(): Promise<Schedule[]> {
    if (this.cache == null) {
      this.cache = await Promise.all(
        rawSchedules.map(
          (raw) => new Schedule(raw.name, new Date(raw.date), raw.emoji)
        )
      );
    }

    return [...this.cache];
  }

  static async getIncoming(): Promise<Schedule[]> {
    const all = await Schedule.getAll();

    return all.filter((s) => s.date > new Date() || isSameDay(s.date, new Date()));
  }

  static async getFirst(): Promise<Schedule | undefined> {
    const all = await Schedule.getAll();

    return all.shift();
  }

  static async getLast(): Promise<Schedule | undefined> {
    const all = await Schedule.getAll();

    return all.pop();
  }
}
