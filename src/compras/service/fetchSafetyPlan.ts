import { fetchPlan } from "./fetchPlan";
import { z } from "zod";

type IdQuery = string | string[] | undefined;

const parseId = (id: IdQuery) => {
  const schema = z.object({
    id: z.coerce.number().min(0).max(2),
  });

  const parse = schema.safeParse({ id });
  if (!parse.success) {
    throw Error("id no indicado");
  }
  return parse.data.id;
};

const fetchSafetyPlan = async (query: IdQuery) => {
  const id = parseId(query);
  return fetchPlan(id);
};

export { fetchSafetyPlan };
