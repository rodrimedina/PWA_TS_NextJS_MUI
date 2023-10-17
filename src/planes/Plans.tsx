import { Container } from "@mui/material";
import PlansSection from "@/src/planes/components/PlansSection";
import { Plan } from "../types/Plan";

const Plans = ({ plans }: { plans: Plan[] }) => {
  return (
    <>
      <Container
        sx={{ mt: "2rem" }}
        maxWidth={false}
        className="background-light"
      >
        <Container>
          <PlansSection plans={plans} />
        </Container>
      </Container>
    </>
  );
};

export default Plans;
