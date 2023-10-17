import Plans from "@/src/planes/Plans";
import { usePlans } from "@/src/planes/services/usePlans";

const planes = () => {
  const plans = usePlans();
  return (
    <>
      {plans.isLoading && <div>Loading...</div>}
      {plans.isError && <div>Error</div>}
      {plans.isSuccess && <Plans plans={plans.data} />}
    </>
  );
};

export default planes;
