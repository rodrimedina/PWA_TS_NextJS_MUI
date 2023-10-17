import { useQuery } from "@tanstack/react-query";
import { Plan } from "../../types/Plan";
import { useRouter } from "next/router";
import { fetchSafetyPlan } from "../service/fetchSafetyPlan";

const usePlan = () => {
  const router = useRouter();
  const id = router.query.id;

  const query = useQuery<Plan, Error>({
    queryKey: ["plan", id],
    queryFn: async () => await fetchSafetyPlan(id),
  });
  return query;
};

export { usePlan };
