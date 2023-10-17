// api plans
// https://mocki.io/v1/819ad59a-d91e-45dd-9820-30f2939b3e34

import { Plan } from "../../types/Plan";

const fetchPlanes = async (): Promise<Plan[]> => {
  const response = await fetch(
    `https://mocki.io/v1/819ad59a-d91e-45dd-9820-30f2939b3e34`
  );
  const data = await response.json();
  return data["plans"];
};

export { fetchPlanes };
