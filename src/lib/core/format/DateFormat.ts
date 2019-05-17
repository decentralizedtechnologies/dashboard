import moment from "moment";

export default class DateFormat {

  public static defaultFormat = "YYYY-MM-DD, h:mm:ss a";

  public date: moment.Moment;

  constructor(date: string | number | moment.Moment | null) {
    this.date = date === null ? moment() : moment(date);
  }

  public fromNow() {
    return this.date.fromNow();
  }

  public default() {
    return this.date.format(DateFormat.defaultFormat);
  }

  get month() {
    return this.date.format("MMM");
  }

  get monthFullName() {
    return this.date.format("MMMM");
  }

  get year() {
    return this.date.format("YYYY");
  }
}
