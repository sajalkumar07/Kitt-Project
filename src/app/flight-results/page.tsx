import FlightsResults from "@/app/components/FlightResults";
import SuspenseBoundary from "@/app/components/SuspenseBoundary";

export default function FlightSearchPage() {
  return (
    <div>
      <SuspenseBoundary>
        <FlightsResults />
      </SuspenseBoundary>
    </div>
  );
}
