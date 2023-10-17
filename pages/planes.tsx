import Plans from "@/src/planes/Plans";
import { usePlanes } from "@/src/planes/hooks/usePlanes";

// api plans
// https://mocki.io/v1/819ad59a-d91e-45dd-9820-30f2939b3e34
const planes = () => {
  const planes = usePlanes();

  return (
    <>
      {planes.isLoading && <div>Loading...</div>}
      {planes.isError && <div>Error...</div>}
      {planes.isSuccess && <Plans plans={planes.data} />}
    </>
  );
};

export default planes;
