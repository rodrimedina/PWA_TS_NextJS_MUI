import { useQuery } from "@tanstack/react-query";
import { Plan } from "../types/Plans";

// api plans
// https://mocki.io/v1/819ad59a-d91e-45dd-9820-30f2939b3e34

const fetchPlans = async (): Promise<Plan[]> => {
  const plans = await fetch(
    "https://mocki.io/v1/819ad59a-d91e-45dd-9820-30f2939b3e34"
  );
  const json = await plans.json();
  return json["plans"];
};

const usePlans = () => {
  const query = useQuery<Plan[], Error>({
    queryKey: ["plans"],
    queryFn: fetchPlans,
  });
  return query;
};

export { usePlans, fetchPlans };
