import {  connect, JSONCodec } from "nats";
import { TourModel } from "../models/tourModel";

export const subscribeMessage = async () => {
  const nc = await connect({
    servers: `${process.env.NATS_HOST}:${process.env.NATS_PORT}`,
  });
  const jsc = JSONCodec();

  const subscription = nc.subscribe("tour.add");
  (async (sub) => {
    console.log(`listening for ${sub.getSubject()} requests...`);
    for await (const m of sub) {
      const subjectData = jsc.decode(m.data);

      if (subjectData) {
        const tour = await TourModel.create(subjectData);
      } else {
        return;
      }
    }
    console.log(`subscription ${sub.getSubject()} drained.`);
  })(subscription);
};
