import Compras from "@/src/compras/Compras";
import { usePlan } from "@/src/compras/hooks/usePlan";

const plan = () => {
  const plan = usePlan();

  return (
    <div>
      {plan.isLoading && <div>Is Loading</div>}
      {plan.isError && <div>{plan.error.message}</div>}
      {plan.isSuccess && (
        <Compras
          title={plan.data.title}
          description={plan.data.description}
          price={plan.data.price}
        />
      )}
    </div>
  );
};

export default plan;
