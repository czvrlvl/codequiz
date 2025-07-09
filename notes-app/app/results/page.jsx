import { Suspense } from "react";
import ResultsContent from "./resultscontent";

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Loading results...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
