import { WORK_HIST_FR } from "../data";
import { WORK_HIST_EN } from "../data";
import WorkHistoryCard from "./WorkHistoryCard";

export default function WorkHistory({ islanguage }) {
  return (
    <div>
      <section id="work-hist">
        <h2 id="work-history">{islanguage === "FR" ? 'Parcours Professionnel' : 'Work History'}</h2>
        {islanguage === "FR"
          ? WORK_HIST_FR.map((workItem, index) => (
              <WorkHistoryCard key={index} {...workItem} />
            ))
          : WORK_HIST_EN.map((workItem, index) => (
              <WorkHistoryCard key={index} {...workItem} />
            ))}
      </section>
    </div>
  );
}

/* 
{islanguage === "FR"
    ? WORK_HIST_FR.map((workItem, index) => (
        <div key={index}>
          <strong>🚧 {workItem.title} </strong>
          <p>
            <ins>{workItem.date}</ins>
          </p>
          <ul>
            <li>{workItem.description}</li>
          </ul>
          <div className="line-break"></div>
        </div>
      ))
    : WORK_HIST_EN.map((workItem, index) => (
        <div key={index}>
          <strong>🚧 {workItem.title} </strong>
          <p>
            <ins>{workItem.date}</ins>
          </p>
          <ul>
            <li>{workItem.description}</li>
          </ul>
          <div className="line-break"></div>
        </div>
      ))}
</div>

*/
