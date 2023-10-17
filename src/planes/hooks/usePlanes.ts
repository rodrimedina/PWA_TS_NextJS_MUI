import { useQuery } from "@tanstack/react-query";
import { fetchPlanes } from "../service/fetchPlanes";
import { Plan } from "../../types/Plan";

const usePlanes = () => {
  const query = useQuery<Plan[], Error>({
    queryKey: ["planes"],
    queryFn: fetchPlanes,
  });
  return query;
};

export { usePlanes };
