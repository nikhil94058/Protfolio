import { portfolioData } from "@/lib/data";
import Terminal from "@/components/templates/components/Terminal";

export default function Skills() {
  return (
    <section>
       <Terminal skills={portfolioData.skills} />
    </section>
  )
}